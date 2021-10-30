import { Page } from "../models";
import { IIsAuth, IField } from "../interfaces";
import { uploadFile, deleteFile, updateFile } from "../helpers/upload";
import { types } from "../../modules/messageTypes";
import { config } from "dotenv";
config();
const { UPLOAD = "" } = process.env;

export const Query = {
  async getPage(_: any, { url }: { url: string }) {
    try {
      const page = await Page.findOne({ url });
      return page;
    } catch (error: any) {
      throw new Error(`Getting page error: ${error.message}`);
    }
  },
};

export const Mutation = {
  async setPageImage(
    _: any,
    { url, image: uploadImage, deleting }: IField,
    { isAuth }: { isAuth: IIsAuth }
  ) {
    try {
      if (!isAuth.auth) {
        throw new Error("Access denied!");
      }

      const page: any = await Page.findOne({ url });
      if (!page) {
        let Location;
        if (!!uploadImage) {
          Location = await uploadFile(uploadImage, UPLOAD);
        }
        const newPage = new Page({
          url,
          image: Location,
          date: new Date(),
        });
        await newPage.save();
      } else {
        let image = "";
        if (deleting) {
          if (page.image) {
            await deleteFile(page.image, UPLOAD);
          }
        } else {
          if (!!uploadImage) {
            if (!!page.image) {
              const Location = await updateFile(
                page.image,
                uploadImage,
                UPLOAD
              );
              image = Location;
            } else {
              const Location = await uploadFile(uploadImage, UPLOAD);
              image = Location;
            }
          }
        }
        await Page.updateOne({ url }, { image, date: new Date() });
      }

      return {
        type: types.success.keyWord,
        message: "Зображення оновлено успішно!",
      };
    } catch (error: any) {
      throw new Error(`Updating image page error: ${error.message}`);
    }
  },
};
