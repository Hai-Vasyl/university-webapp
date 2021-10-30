import { useState, useEffect } from "react";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Team from "../pages/Team";
import NewsEvents from "../pages/NewsEvents";
import Graduates from "../pages/Graduates";
import Entrant from "../pages/Entrant";
import ScheduleSession from "../pages/ScheduleSession";
import Gallery from "../pages/Gallery";
import Management from "../pages/Management";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import Schedule from "../pages/Schedule";
import RegisterUser from "../pages/RegisterUser";
import NewsEvent from "../pages/NewsEvent";
import ModNewsEvent from "../pages/ModNewsEvent";
import Users from "../pages/Users";
import Search from "../pages/Search";
import { access } from "../modules/accessModifiers";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { useQuery } from "@apollo/client";
import { GET_ALL_PAGE_SECTIONS } from "../fetching/queries";
import { ILink } from "../interfaces";

type IExtraLink = { url: string; id: string; page: string; title: string };

const useRoutes = () => {
  const {
    auth: {
      user: { role },
    },
    configs: { lang },
  } = useSelector((state: RootStore) => state);

  const { data: dataSections } = useQuery(GET_ALL_PAGE_SECTIONS, {
    variables: {
      urls: ["/management"],
      lang: lang === "uk" ? undefined : lang,
    },
  });

  const defaultOtherExtraLinks = [
    {
      to: "/schedule",
      title: "Розклад Занять",
    },
    {
      to: "/schedule-session",
      title: "Розклад Сесії",
    },
    {
      to: "/projects",
      title: "Проекти",
    },
    {
      to: "/contacts",
      title: "Контакти",
    },
  ];

  const defaultLinks = [
    {
      to: "/",
      exact: true,
      title: "Головна",
    },
    {
      title: "Про Інститут",
      to: "/about",
      extraLinks: [
        { to: "/about", title: "Навчальний Заклад" },
        { to: "/team", title: "Команда" },
        { to: "/graduates", title: "Випускники" },
      ],
    },
    {
      to: "/discover",
      title: "Шукати",
    },
    {
      title: "Новини і Події",
      to: "/news",
      extraLinks: [
        {
          to: "/news",
          title: "Новини",
        },
        {
          to: "/events",
          title: "Події",
        },
      ],
    },
    {
      to: "/entrant",
      title: "Вступнику",
    },
    {
      to: "/gallery",
      title: "Галерея",
    },
    {
      title: "Управління",
      exact: true,
      to: "/management",
    },
    {
      title: "Інше",
      isAdminLinks: true,
      to: "/schedule",
      extraLinks: defaultOtherExtraLinks,
    },
  ];

  const defaultResponsiveLinks = [
    {
      to: "/",
      exact: true,
      title: "Головна",
    },
    { to: "/about", title: "Навчальний Заклад" },
    { to: "/team", title: "Команда" },
    { to: "/graduates", title: "Випускники" },
    {
      to: "/discover",
      title: "Шукати",
    },
    {
      to: "/news",
      title: "Новини",
    },
    {
      to: "/events",
      title: "Події",
    },
    {
      to: "/entrant",
      title: "Вступнику",
    },
    {
      to: "/gallery",
      title: "Галерея",
    },
    {
      to: "/management",
      title: "Управління",
    },
    {
      to: "/schedule",
      title: "Розклад Занять",
    },
    {
      to: "/schedule-session",
      title: "Розклад Сесії",
    },
    {
      to: "/projects",
      title: "Проекти",
    },
    {
      to: "/contacts",
      title: "Контакти",
    },
  ];

  const defaultRoutes = [
    { path: "/", exact: true, Component: Home },
    { path: "/about", Component: About },
    { path: "/team", Component: Team },
    { path: "/graduates", Component: Graduates },
    { path: "/discover", Component: Search },
    { path: "/news", exact: true, Component: NewsEvents },
    { path: "/events", exact: true, Component: NewsEvents },
    { path: "/entrant", exact: true, Component: Entrant },
    { path: "/gallery", exact: true, Component: Gallery },
    { path: "/projects", Component: Projects },
    { path: "/management", Component: Management },
    { path: "/schedule", Component: Schedule },
    { path: "/schedule-session", Component: ScheduleSession },
    { path: "/contacts", Component: Contacts },
    { path: "/news/details/:contentId", Component: NewsEvent },
    { path: "/events/details/:contentId", Component: NewsEvent },
  ];

  const [initSetupSections, setInitSetupSections] = useState(false);

  const [links, setLinks] = useState<ILink[]>(defaultLinks);
  const [linksResponsive, setLinksResponsive] = useState<ILink[]>(
    defaultResponsiveLinks
  );

  const [routes, setRoutes] = useState(defaultRoutes);

  useEffect(() => {
    const extraLinksData = dataSections?.getAllPageSections || [];
    const listLinks = {
      admin: [
        { to: "/create-news", title: "Створити Новину" },
        { to: "/create-event", title: "Створити Подію" },
        { to: "/register-user", title: "Створити Користувача" },
        { to: "/users", title: "Усі Користувачі" },
      ],
      teacher: [
        { to: "/create-news", title: "Створити Новину", exact: true },
        { to: "/create-event", title: "Створити Подію" },
        { to: "/users", title: "Усі Користувачі" },
      ],
    };

    const listRoutes = {
      admin: [
        { path: "/users", Component: Users },
        { path: "/register-user", Component: RegisterUser },
        { path: "/create-news", Component: ModNewsEvent },
        { path: "/create-event", Component: ModNewsEvent },
        { path: "/edit-news/:contentId", Component: ModNewsEvent },
        { path: "/edit-event/:contentId", Component: ModNewsEvent },
        { path: "/profile/:userId", exact: true, Component: Profile },
      ],
      teacher: [
        { path: "/create-news", Component: ModNewsEvent },
        { path: "/create-event", Component: ModNewsEvent },
        { path: "/users", Component: Users },
        { path: "/edit-news/:contentId", Component: ModNewsEvent },
        { path: "/edit-event/:contentId", Component: ModNewsEvent },
        { path: "/profile/:userId", exact: true, Component: Profile },
      ],
    };

    const linksAdmin =
      role === access.admin.keyWord
        ? listLinks.admin
        : role === access.teacher.keyWord
        ? listLinks.teacher
        : [];

    const routesAdmin =
      role === access.admin.keyWord
        ? listRoutes.admin
        : role === access.teacher.keyWord
        ? listRoutes.teacher
        : [];

    setLinks((_links) =>
      _links.map((link: ILink) => {
        if (link.isAdminLinks) {
          if (link.extraLinks?.length) {
            link.extraLinks = [...defaultOtherExtraLinks, ...linksAdmin];
          }
        }
        if (!initSetupSections) {
          extraLinksData.forEach((extraLink: IExtraLink) => {
            if (extraLink.url === link.to) {
              if (!link.hasOwnProperty("extraLinks")) {
                link.extraLinks = [];
              }
              link.extraLinks?.push({
                to: `${link.to}?section=${extraLink.id}`,
                title: extraLink.title,
              });
            }
          });
        }
        return link;
      })
    );
    if (extraLinksData.length && !initSetupSections) {
      setInitSetupSections(true);
    }

    setLinksResponsive(() => [...defaultResponsiveLinks, ...linksAdmin]);

    setRoutes(() => [...defaultRoutes, ...routesAdmin]);
  }, [role, dataSections]);

  return { links, routes, linksResponsive };
};

export default useRoutes;
