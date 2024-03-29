import { PageSection, Page, Filter, Upload, NewsEvent } from "../models";
import { IField, IIsAuth, IPageSection } from "../interfaces";
import { types } from "../../modules/messageTypes";
import { createEditValid } from "../validation/pageSections";
import { deleteFile } from "../helpers/upload";
import { config } from "dotenv";
config();
const { UPLOADS = "" } = process.env;

export const Query = {
  async getAllPageSections(_: any, { urls, lang }: IField) {
    try {
      const pageSections = await PageSection.find({
        url: { $in: urls },
        lang,
      }).sort({
        priority: -1,
      });

      return pageSections;
    } catch (error: any) {
      throw new Error(`Getting all page sections error: ${error.message}`);
    }
  },
  async getPageSections(
    _: any,
    { search, url, filters, from, to, exceptId, lang }: IField
  ) {
    try {
      const searchQuery = search && { $text: { $search: search } };
      let collection: any = [];
      let quantity = 0;
      if (filters.length) {
        for (let i = 0; i < filters.length; i++) {
          const sections: any = await PageSection.find({
            url,
            lang,
            ...searchQuery,
          }).populate({
            path: "filters",
            match: { keyWord: filters[i].keyWord, value: filters[i].value },
          });

          let colectionTemp: IPageSection[] = [];
          sections.forEach((item: any) => {
            if (item.filters.length) {
              colectionTemp.push(item);
            }
          });
          if (i === 0) {
            collection = colectionTemp;
          } else {
            let collectionNew = [];
            for (let i = 0; i < collection.length; i++) {
              for (let j = 0; j < colectionTemp.length; j++) {
                if (
                  String(collection[i]._id) === String(colectionTemp[j]._id)
                ) {
                  collectionNew.push(collection[i]);
                }
              }
            }
            collection = collectionNew;
          }
        }
        let collectionNew: IPageSection[] = [];
        collection.forEach((item: IPageSection, index: number) => {
          if (from <= index && index < from + to) {
            collectionNew.push(item);
          }
        });
        quantity = collection.length;
        const sections = await PageSection.find({
          _id: { $in: collectionNew.map((item) => item._id) },
          lang,
        }).populate({ path: "filters" });
        collection = sections;
      } else {
        const sections: any = await PageSection.find({
          _id: exceptId ? { $ne: exceptId } : { $exists: true },
          ...searchQuery,
          url,
          lang,
        })
          .populate({ path: "filters" })
          .sort({
            priority: 1,
          })
          .skip(from)
          .limit(to);
        quantity = await PageSection.find({
          ...searchQuery,
          url,
          lang,
        }).countDocuments();
        collection = sections;
      }

      return {
        items: collection,
        quantity,
      };
    } catch (error: any) {
      throw new Error(`Getting page sections error: ${error.message}`);
    }
  },
  async searchContent(_: any, { search, tags, lang }: IField) {
    try {
      const searchQuery = search && { $text: { $search: search } };
      const keyWords = tags.split(" ");

      const collection: any = {
        images: [],
        news: [],
        events: [],
        other: [],
      };
      if (!!keyWords.includes("images") || !tags.length) {
        const uploads = await Upload.find({
          ...searchQuery,
          type: { $ne: "private" },
          format: "image",
        })
          .sort({ date: -1 })
          .limit(4);
        collection.images = uploads;
      }
      if (!!keyWords.includes("news") || !tags.length) {
        const news = await NewsEvent.find({
          ...searchQuery,
          type: "news",
          lang,
        })
          .sort({ date: -1 })
          .limit(4);
        collection.news = news;
      }
      if (!!keyWords.includes("events") || !tags.length) {
        const events = await NewsEvent.find({
          ...searchQuery,
          type: "event",
          lang,
        })
          .sort({ date: -1 })
          .limit(4);
        collection.events = events;
      }
      if (!!keyWords.includes("other") || !tags.length) {
        let sections;
        let pagesection = PageSection.find({ ...searchQuery, lang }).sort({
          date: -1,
        });

        if (!tags.length && !search.length) {
          sections = await pagesection.limit(10);
        } else {
          if (!search.length) {
            sections = await pagesection.limit(10);
          } else {
            sections = await pagesection;
          }
        }

        collection.other = sections;
      }

      return collection;
    } catch (error: any) {
      throw new Error(`Getting searched content error: ${error.message}`);
    }
  },
  async getPageSection(_: any, { sectionId, lang }: IField) {
    try {
      const section = await PageSection.findOne({
        _id: sectionId,
        lang,
      }).populate({
        path: "filters",
      });
      return section;
    } catch (error: any) {
      throw new Error(`Getting page section error: ${error.message}`);
    }
  },
};

export const Mutation = {
  async createPageSection(
    _: any,
    { title, content, priority, url, filters, optContent, lang }: IField,
    { isAuth }: { isAuth: IIsAuth }
  ) {
    try {
      if (!isAuth.auth) {
        throw new Error("Access denied!");
      }

      const {
        title: vTitle,
        content: vContent,
        priority: vPriority,
        url: vUrl,
        isError,
      }: any = await createEditValid({
        title,
        content: optContent ? undefined : content,
        priority,
        url,
      });
      let errors: any = {};
      if (filters.length) {
        for (let i = 0; i < filters.length; i++) {
          if (!filters[i].value) {
            errors[filters[i].keyWord] = {
              value: filters[i].value,
              msg: ["Це поле не може бути порожнім!"],
            };
          }
        }
      }
      if (isError || Object.keys(errors).length) {
        throw new Error(
          JSON.stringify({
            title: vTitle,
            content: optContent ? { value: "", msg: [] } : vContent,
            priority: vPriority,
            url: vUrl,
            ...errors,
          })
        );
      }

      const page: any = await Page.findOne({ url });
      let savedPage: any;
      if (!page) {
        const newPage = new Page({
          url,
          date: new Date(),
        });
        savedPage = await newPage.save();
      }
      let pageCollection = page || savedPage;

      const newSection = new PageSection({
        page: pageCollection._id,
        title,
        url,
        content,
        priority,
        owner: isAuth.userId,
        date: new Date(),
        lang,
      });
      const section: any = await newSection.save();

      if (filters.length) {
        for (let i = 0; i < filters.length; i++) {
          const filter = new Filter({
            page: pageCollection._id,
            url,
            section: section._id,
            keyWord: filters[i].keyWord,
            value: filters[i].value,
            date: new Date(),
            lang,
          });
          const newFilter = await filter.save();
          section.filters.push(newFilter._id);
        }
        await section.save();
      }

      return {
        message: "Розділ створено успішно!",
        type: types.success.keyWord,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async editPageSection(
    _: any,
    { sectionId, title, content, priority, filters, optContent, lang }: IField,
    { isAuth }: { isAuth: IIsAuth }
  ) {
    try {
      if (!isAuth.auth) {
        throw new Error("Access denied!");
      }

      const {
        title: vTitle,
        content: vContent,
        priority: vPriority,
        isError,
      }: any = await createEditValid({
        title,
        content: optContent ? undefined : content,
        priority,
      });
      let errors: any = {};
      if (filters.length) {
        for (let i = 0; i < filters.length; i++) {
          if (!filters[i].value) {
            errors[filters[i].keyWord] = {
              value: filters[i].value,
              msg: ["Це поле не може бути порожнім!"],
            };
          }
        }
      }
      if (isError || Object.keys(errors).length) {
        throw new Error(
          JSON.stringify({
            title: vTitle,
            content: optContent ? { value: "", msg: [] } : vContent,
            priority: vPriority,
            ...errors,
          })
        );
      }

      await PageSection.findByIdAndUpdate(sectionId, {
        title,
        content,
        priority,
        date: new Date(),
        lang,
      });
      if (filters.length) {
        for (let i = 0; i < filters.length; i++) {
          await Filter.findByIdAndUpdate(filters[i].filterId, {
            value: filters[i].value,
            lang,
          });
        }
      }

      return {
        message: "Розділ оновлено успішно!",
        type: types.success.keyWord,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async deletePageSection(
    _: any,
    { sectionId }: IField,
    { isAuth }: { isAuth: IIsAuth }
  ) {
    try {
      if (!isAuth.auth) {
        throw new Error("Access denied!");
      }

      const uploads: any = await Upload.find({ content: sectionId });
      if (uploads.length) {
        for (let i = 0; i < uploads.length; i++) {
          await deleteFile(uploads[i].location, UPLOADS);
        }
        await Upload.deleteMany({ content: sectionId });
      }

      await Filter.deleteMany({ section: sectionId });
      await PageSection.findByIdAndDelete(sectionId);

      return {
        message: "Розділ видалено успішно!",
        type: types.success.keyWord,
      };
    } catch (error: any) {
      throw new Error(`Deleting page section error: ${error.message}`);
    }
  },
};
