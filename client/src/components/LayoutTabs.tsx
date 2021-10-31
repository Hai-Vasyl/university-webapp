import React, { useState } from "react";
import { GET_PAGE_SECTIONS } from "../fetching/queries";
import { useQuery } from "@apollo/client";
import Title from "./Title";
// @ts-ignore
import styles from "../styles/pages.module";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { access } from "../modules/accessModifiers";
import { INewsEventSlider, IPageSection } from "../interfaces";
import PageSection from "./PageSection";
import ModSectionForm from "./ModSectionForm";
import NewsEventsModule from "./NewsEventsModule";
import NavbarPage from "./NavbarPage";
import SectionAbout from "./SectionAbout";
import SideNavbar from "./SideNavbar";
import NewsEventsModuleContainer from "./NewsEventsModuleContainer";
import FooterModule from "./FooterModule";
import Head from "./Head";

interface ILayoutTabsProps {
  imgsPrivate?: boolean;
}

const LayoutTabs: React.FC<ILayoutTabsProps> = ({ imgsPrivate = false }) => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const sectionId = params.get("section") || "";
  const isAboutUrl = pathname === "/about";

  const {
    configs: { current },
    auth: { user },
    configs: { lang },
  } = useSelector((state: RootStore) => state);

  const { title, description } = current.page[pathname];

  const {
    data: dataSections,
    loading: loadSections,
    refetch: refetchSections,
  } = useQuery(GET_PAGE_SECTIONS, {
    variables: {
      filters: [],
      from: 0,
      url: pathname,
      lang: lang === "uk" ? undefined : lang,
    },
  });

  const [toggleCreate, setToggleCreate] = useState(false);

  const handleRefetchAll = () => {
    refetchSections();
  };

  const handleCreate = () => {
    handleRefetchAll();
    setToggleCreate((prev) => !prev);
  };

  let sections = dataSections ? dataSections.getPageSections.items : [];
  sections = isAboutUrl ? sections.slice(1) : sections;
  const links = sections
    ? sections.map((item: IPageSection) => ({ title: item.title, id: item.id }))
    : [];

  const sectionsJSX =
    sections &&
    sections.map((section: IPageSection, index: number) => {
      return (
        <div
          className={
            sectionId === section.id || (!sectionId && index === 0)
              ? styles.section__active
              : styles.section__close
          }
          key={section.id}
        >
          <PageSection
            info={section}
            filters={[]}
            onDelete={handleRefetchAll}
            onEdit={handleRefetchAll}
            isOptContent
          >
            <SectionAbout
              info={section}
              onCreate={refetchSections}
              onEdit={refetchSections}
              onRemove={refetchSections}
              privateType={imgsPrivate}
              isOwnerContent={user.role === access.admin.keyWord}
            />
          </PageSection>
        </div>
      );
    });

  return (
    <div className="container">
      <Head title={title} description={description} />
      <Title title={title} />
      <NavbarPage
        sectionLinks={links}
        activeSection={sectionId || sections[0]?.id}
        onCreate={() => setToggleCreate((prev) => !prev)}
        toggle={toggleCreate}
      />
      {user.role === access.admin.keyWord && toggleCreate && (
        <ModSectionForm onCreate={handleCreate} isOptContent />
      )}
      <div className="wrapper">
        {loadSections ? (
          <Loader />
        ) : sections.length ? (
          <div className={styles.page_wrapper_flex}>
            {links.length > 1 && (
              <SideNavbar
                links={links}
                active={sectionId || sections[0]?.id}
                exClass={styles.page_wrapper_flex__sidebar}
              />
            )}
            <div className={styles.page_wrapper_flex__content}>
              {sectionsJSX}
            </div>
          </div>
        ) : (
          <div className="plug-text">Порожньо</div>
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

export default LayoutTabs;
