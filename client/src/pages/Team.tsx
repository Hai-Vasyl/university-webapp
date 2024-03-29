import React, { useState, useEffect, useCallback, useRef } from "react";
import Title from "../components/Title";
import ModSectionForm from "../components/ModSectionForm";
import FieldPicker from "../components/FieldPicker";
import FilterFrame from "../components/FilterFrame";
import { GET_PAGE_FILTERS, GET_PAGE_SECTIONS } from "../fetching/queries";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { IOption, IField, IPageSection, INewsEventSlider } from "../interfaces";
import FieldSearch from "../components/FieldSearch";
import { useHistory } from "react-router-dom";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import PageSection from "../components/PageSection";
import SectionPerson from "../components/SectionPerson";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { access } from "../modules/accessModifiers";
import useFindFilter from "../hooks/useFindFilter";
import NewsEventsModuleContainer from "../components/NewsEventsModuleContainer";
import NewsEventsModule from "../components/NewsEventsModule";
import FooterModule from "../components/FooterModule";
import Head from "../components/Head";

const Team: React.FC = () => {
  const anchor = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);

  let search = params.get("search") || "";
  const page = Number(params.get("page")) || 1;
  const category = params.get("category") || "all";
  const amountItems = 3;

  const {
    auth: { user },
    configs: { lang, current },
  } = useSelector((state: RootStore) => state);

  const { getFormFilterParams } = useFindFilter();
  const getFilters = (category: string) => {
    category = category === "all" ? "" : category;

    let filters = [];
    if (category.length) {
      filters.push({ keyWord: "category", value: category });
    }
    return filters;
  };

  const { data: dataFilters, refetch: refetchFilters } = useQuery(
    GET_PAGE_FILTERS,
    {
      variables: {
        url: location.pathname,
        lang,
      },
    }
  );

  const {
    data: dataSections,
    loading: loadSections,
    refetch: refetchSections,
  } = useQuery(GET_PAGE_SECTIONS, {
    variables: {
      search,
      filters: getFilters(category),
      from: (page - 1) * amountItems,
      to: amountItems,
      url: location.pathname,
      lang,
    },
  });

  const [searchStr, setSearchStr] = useState(search);
  const [form, setForm] = useState<IField[]>([
    {
      param: "category",
      type: "text",
      value: "",
      title: "Категорія",
      msg: "",
      options: [],
      isImportant: true,
    },
  ]);
  const [filters, setFilters] = useState<IField[]>([
    {
      param: "category",
      type: "text",
      value: category,
      title: "Категорія",
      msg: "",
      options: [],
    },
  ]);
  const [toggleCreate, setToggleCreate] = useState(false);

  const setFiltersValue = useCallback((keyWord: string, value: string) => {
    setFilters((prev) =>
      prev.map((field) => {
        if (field.param === keyWord) {
          return { ...field, value };
        }
        return field;
      })
    );
  }, []);

  useEffect(() => {
    anchor.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    setFiltersValue("category", category);
  }, [setFiltersValue, category]);

  useEffect(() => {
    let filters = dataFilters && dataFilters.getFilters;

    const setOptions = (
      setForm: any,
      categories: IOption[],
      isForm: boolean
    ) => {
      setForm((prev: IField[]) =>
        prev.map((field: IField) => {
          if (field.param === "category") {
            return {
              ...field,
              value: isForm || !category ? categories[0].value : category,
              options: categories,
            };
          }
          return field;
        })
      );
    };

    if (filters && filters.length) {
      let categories: string[] = [];

      for (let i = 0; i < filters.length; i++) {
        if (
          filters[i].keyWord === "category" &&
          !categories.includes(filters[i].value)
        ) {
          categories.push(filters[i].value);
        }
      }

      const categoryOptions = categories.map((item) => ({
        label: item,
        value: item,
      }));
      setOptions(setForm, categoryOptions, true);
      setOptions(
        setFilters,
        [{ label: "Усі", value: "all" }, ...categoryOptions],
        false
      );
    }
  }, [dataFilters]);

  const filtersJSX =
    filters.length &&
    filters.map((field) => {
      return (
        <FieldPicker
          key={field.param}
          submit
          field={field}
          change={setFilters}
          noError
          options={field.options || []}
        />
      );
    });

  const getRedirectLink = (
    pageNumber: number,
    category: string,
    searchStr?: string
  ) => {
    const searchQuery = `${searchStr ? "search=" + searchStr + "&" : ""}`;

    let link = `${location.pathname}?page=${pageNumber}&category=${category}&${searchQuery}`;
    history.push(link.slice(0, link.length - 1));
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [category] = filters;
    getRedirectLink(1, category.value, searchStr);
  };

  const toggleCreateForm = () => {
    setToggleCreate((prev) => !prev);
  };

  const getRedirectPagination = (number: number) => {
    const [category] = filters;
    getRedirectLink(number, category.value, search);
  };

  const handleResetSearch = () => {
    setSearchStr("");
    const [category] = filters;
    getRedirectLink(1, category.value);
  };

  const checkSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!value) {
      handleResetSearch();
      return;
    }
  };

  const handleDeleteSection = () => {
    const [category] = filters;
    refetchFilters();
    refetchSections();
    getRedirectLink(1, category.value, search);
  };

  const handleEditSection = () => {
    refetchFilters();
    refetchSections();
  };

  const handleCreate = () => {
    refetchFilters();
    refetchSections();
    setToggleCreate((prev) => !prev);
  };

  const sections = dataSections && dataSections.getPageSections.items;

  const sectionsJSX =
    sections &&
    sections.map((section: IPageSection) => {
      return (
        <PageSection
          key={section.id}
          info={section}
          filters={section.filters.map((filter) => {
            const filterParams = getFormFilterParams(form, filter.keyWord);
            return {
              keyWord: filter.keyWord,
              value: filter.value,
              options: filterParams.options,
              title: filterParams.title,
            };
          })}
          onDelete={handleDeleteSection}
          onEdit={handleEditSection}
        >
          <SectionPerson
            onCreate={refetchSections}
            onRemove={refetchSections}
            onEdit={refetchSections}
            info={section}
            subtitle={{
              keyWord: "category",
              title: "Категорія",
              text: `${location.pathname}?page=1&category=`,
            }}
          />
        </PageSection>
      );
    });

  const quantityItems = dataSections && dataSections.getPageSections.quantity;
  const { title, description } = current.page[location.pathname];

  return (
    <div className="container">
      <Head title={title} description={description} />
      <div ref={anchor}></div>
      <Title title={title} />
      <FilterFrame
        numFilters={filters.length}
        onCreate={toggleCreateForm}
        toggle={toggleCreate}
        submit={handleSubmitForm}
        quantity={quantityItems}
        search={search}
      >
        <FieldSearch
          resetSearch={handleResetSearch}
          search={search}
          check={checkSearch}
          searchStr={searchStr}
          change={setSearchStr}
        />
        {filtersJSX}
      </FilterFrame>
      {user.role === access.admin.keyWord && toggleCreate && (
        <ModSectionForm
          onCreate={handleCreate}
          filters={form}
          setFilters={setForm}
        />
      )}
      <div className="wrapper">
        {!!quantityItems && (
          <Pagination
            getRedirectLink={getRedirectPagination}
            quantityItem={quantityItems}
            amountItemsPage={amountItems}
            currentPageNumber={page}
            isTop
          />
        )}
        <div className="wrapper-clear">
          {loadSections ? (
            <Loader />
          ) : sections?.length ? (
            sectionsJSX
          ) : (
            <div className="plug-text">Порожньо</div>
          )}
        </div>
        {!!quantityItems && (
          <Pagination
            getRedirectLink={getRedirectPagination}
            quantityItem={quantityItems}
            amountItemsPage={amountItems}
            currentPageNumber={page}
          />
        )}
      </div>
      <NewsEventsModuleContainer isNews={true}>
        {(items: INewsEventSlider[], loading: boolean, isNews: boolean) => (
          <NewsEventsModule items={items} loading={loading} isNews={isNews} />
        )}
      </NewsEventsModuleContainer>
      <FooterModule />
    </div>
  );
};

export default Team;
