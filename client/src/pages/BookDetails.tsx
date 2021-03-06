import React, { useEffect, useState, useRef } from "react";
import PageSection from "../components/PageSection";
import { useQuery } from "@apollo/client";
import { GET_PAGE_SECTION, GET_PAGE_FILTERS } from "../fetching/queries";
import { useParams, useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import { IField, IOption, IPageSectionFilter } from "../interfaces";
import Title from "../components/Title";
import SectionInfo from "../components/SectionInfo";
import useFindFilter from "../hooks/useFindFilter";
import BooksModule from "../components/BooksModule";
// @ts-ignore
import styles from "../styles/pages.module";
import FooterModule from "../components/FooterModule";
import { useLocation } from "react-router";
import { RootStore } from "../redux/store";
import { useSelector } from "react-redux";
import Head from "../components/Head";

const BookDetails: React.FC = () => {
  const anchor = useRef<HTMLDivElement>(null);
  const { bookId }: any = useParams();
  const history = useHistory();
  const { getFormFilterParams } = useFindFilter();
  const location = useLocation();

  const {
    configs: { current, lang },
  } = useSelector((state: RootStore) => state);

  const [filters, setFilters] = useState<IField[]>([
    {
      param: "genre",
      title: "Жанр",
      options: [],
    },
    {
      param: "group",
      title: "Клас",
      options: [],
    },
  ]);

  const { data: dataFilters, refetch: refetchFilters } = useQuery(
    GET_PAGE_FILTERS,
    {
      variables: {
        url: "/library",
        lang,
      },
    }
  );

  const {
    data: dataSection,
    loading: loadSection,
    refetch: refetchSection,
  } = useQuery(GET_PAGE_SECTION, {
    variables: {
      sectionId: bookId,
      lang,
    },
  });

  useEffect(() => {
    anchor.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [bookId]);

  useEffect(() => {
    let filters = dataFilters && dataFilters.getFilters;

    const setOptions = (setForm: any, genres: IOption[], groups: IOption[]) => {
      setForm((prev: IField[]) =>
        prev.map((field: IField) => {
          if (field.param === "genre") {
            return {
              ...field,
              options: genres,
            };
          } else if (field.param === "group") {
            return {
              ...field,
              options: groups,
            };
          }
          return field;
        })
      );
    };

    if (filters && filters.length) {
      let groups: string[] = [];
      let genres: string[] = [];

      for (let i = 0; i < filters.length; i++) {
        if (
          filters[i].keyWord === "genre" &&
          !genres.includes(filters[i].value)
        ) {
          genres.push(filters[i].value);
        } else if (
          filters[i].keyWord === "group" &&
          !groups.includes(filters[i].value)
        ) {
          groups.push(filters[i].value);
        }
      }

      const genreOptions = genres.map((item) => ({ label: item, value: item }));
      const groupOptions = groups.map((item) => ({ label: item, value: item }));
      setOptions(setFilters, genreOptions, groupOptions);
    }
  }, [dataFilters]);

  const handleRefetchAll = () => {
    refetchFilters();
    refetchSection();
  };

  const handleDeleteSection = () => {
    handleRefetchAll();
    history.push("/library");
  };

  const { title, description } = current.page[location.pathname];
  const info = dataSection && dataSection.getPageSection;

  return (
    <div className="container">
      <Head title={title} description={description} />
      <div ref={anchor}></div>
      <Title title={title} path="/library" />
      <div className="wrapper">
        {loadSection ? (
          <Loader />
        ) : Object.keys(info)?.length ? (
          <PageSection
            key={info.id}
            info={info}
            filters={info.filters.map((filter: IPageSectionFilter) => {
              const filterParams = getFormFilterParams(filters, filter.keyWord);
              return {
                keyWord: filter.keyWord,
                value: filter.value,
                options: filterParams.options,
                title: filterParams.title,
              };
            })}
            onDelete={handleDeleteSection}
            onEdit={handleRefetchAll}
          >
            <SectionInfo
              onEdit={refetchSection}
              onRemove={refetchSection}
              onCreate={refetchSection}
              info={info}
              exClass={styles.content__clear}
              subtitle={{
                keyWord: "group",
                title: "Клас",
                text: `/library?page=1&group=`,
              }}
              link={{
                keyWord: "genre",
                title: "Жанр",
                text: `/library?page=1&genre=`,
              }}
            />
          </PageSection>
        ) : (
          <div className="plug-text">Порожньо</div>
        )}
      </div>
      <BooksModule title="Інші підручники" exceptId={info && info.id} />
      <FooterModule />
    </div>
  );
};

export default BookDetails;
