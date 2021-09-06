import {
  CHANGE_LANGUAGE_CONFIG,
  ConfigsReducerTypes,
  Languages,
} from "./configsTypes";

interface ILanguagePack {
  pageTitles: { [key: string]: string };
}

interface IInitState {
  lang: Languages;
  current: ILanguagePack;
  uk: ILanguagePack;
  en: ILanguagePack;
}

const defaultLaguagePack = {
  pageTitles: {
    "/": "Головна",
    "/about": "Про Інститут",
    "/team": "Команда",
    "/graduates": "Випускники",
    "/discover": "Шукати",
    "/news": "Усі Новини",
    "/events": "Усі Події",
    "/entrant": "Вступнику",
    "/gallery": "Галарея",
    "/projects": "Проекти",
    "/management": "Управління",
    "/schedule": "Розклад Занять",
    "/schedule-session": "Розклад Сесії",
    "/contacts": "Наші Контакти",
    "/news/details/:contentId": "Деталі Новини",
    "/events/details/:contentId": "Деталі Події",
  },
};

const initState: IInitState = {
  lang: Languages["uk"],
  current: defaultLaguagePack,
  uk: defaultLaguagePack,
  en: {
    pageTitles: {
      "/": "Home",
      "/about": "About Us",
      "/team": "Team",
      "/graduates": "Graduates",
      "/discover": "Discover",
      "/news": "All News",
      "/events": "All Events",
      "/entrant": "Entrant",
      "/gallery": "Gallery",
      "/projects": "Projects",
      "/management": "Management",
      "/schedule": "Lesson Schedule",
      "/schedule-session": "Session Schedule",
      "/contacts": "Contacts",
      "/news/details/:contentId": "News Details",
      "/events/details/:contentId": "Event Details",
    },
  },
};

const configsReducer = (state = initState, action: ConfigsReducerTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE_CONFIG:
      const languge = action.payload;

      return {
        ...state,
        lang: languge,
        // @ts-ignore
        current: state[languge],
      };
    default:
      return state;
  }
};

export default configsReducer;
