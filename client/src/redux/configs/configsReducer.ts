import {
  CHANGE_LANGUAGE_CONFIG,
  ConfigsReducerTypes,
  Languages,
} from "./configsTypes";

interface ILanguagePack {
  page: { [key: string]: any };
}

interface IInitState {
  lang: any;
  current: ILanguagePack;
  uk: ILanguagePack;
  en: ILanguagePack;
}

const defaultLaguagePack = {
  page: {
    "/": {
      description:
        'Відокремлений структурний підрозділ Навчально-науковий інститут підприємництва та перспективних технологій Національного університету "Львівська політехніка"',
      title: "ІППТ",
    },
    "/about": {
      description:
        "Навчально-науковий інститут підприємництва та перспективних технологій Національного університету «Львівська політехніка». Корпусі № 32 НУЛП, розташований за адресою: м. Львів, вул. Горбачевського, 18",
      title: "Про Інститут",
    },
    "/team": {
      description:
        "Хром'як Йосиф Якович, Садура Оксана Борисівна, Батьковець Наталія Олегівна, Олексюк Ганна Василівна, Попадинець Назарій Миколайович",
      title: "Команда",
    },
    "/graduates": {
      description: "Кавин Мар’яна Федорівна, Симоненко Юрій Олександрович",
      title: "Випускники",
    },
    "/discover": {
      description: "Шукати зображення, новини, події та інші джерела ІППТ",
      title: "Пошук",
    },
    "/news": {
      description: "Усі новини ІППТ, пошук новин ІППТ",
      title: "Усі Новини",
    },
    "/events": {
      description: "Усі події ІППТ, пошук подій ІППТ",
      title: "Усі Події",
    },
    "/entrant": {
      description: "Інформація для вступників ІППТ. Вступнику ІППТ",
      title: "Вступнику",
    },
    "/gallery": {
      description: "Галерея ІППТ. Зображення новин, подій та інших джерел ІППТ",
      title: "Галерея",
    },
    "/projects": {
      description:
        'Проекти студентів ІППТ ("Данило", "Mosaik", "Вишеграм", "Scholarship в Україні")',
      title: "Проекти",
    },
    "/management": {
      description:
        "Управління ІППТ. Кафедра ІСТ, Кафедра ЕКМ, Кафедра ФОА, Студентська колегія та Науково-дослідний сектор ІППТ",
      title: "Управління",
    },
    "/schedule": {
      description:
        "Розклад занять, розклад пар для фахових молодших спеціалістів, бакалаврів та магістрів ІППТ",
      title: "Розклад Занять",
    },
    "/schedule-session": {
      description:
        "Розклад сесії для фахових молодших спеціалістів, бакалаврів та магістрів ІППТ",
      title: "Розклад Сесії",
    },
    "/contacts": {
      description: "Наші контакти, форма зворотнього зв'язку ІППТ, Адреса ІППТ",
      title: "Наші Контакти",
    },
    "/news/details": {
      description: "Деталі новини ІППТ",
      title: "Деталі Новини",
    },
    "/events/details": {
      description: "Деталі події ІППТ",
      title: "Деталі Події",
    },
    "/profile": {
      description: "Особистий кабінет користувача ІППТ",
      title: "Користувач",
    },
    "/register-user": {
      description: "Реєстрація користувача ІППТ",
      title: "Реєстрація",
    },
    "/users": { description: "Усі користувачі ІППТ", title: "Усі Користувачі" },
    "/create-news": {
      description: "Створення новини",
      title: "Створення Новини",
    },
    "/create-event": {
      description: "Створення події",
      title: "Створення Події",
    },
  },
};

const initState: IInitState = {
  lang: "uk",
  current: defaultLaguagePack,
  uk: defaultLaguagePack,
  en: {
    page: {
      "/": {
        description:
          "Separated Structural Subdivision Educational and Research Institute of Business and Innovative Technologies of Lviv Polytechnic National University",
        title: "IBIT",
      },
      "/about": { description: "", title: "About Us" },
      "/team": { description: "", title: "Team" },
      "/graduates": { description: "", title: "Graduates" },
      "/discover": { description: "", title: "Discover" },
      "/news": { description: "", title: "All News" },
      "/events": { description: "", title: "All Events" },
      "/entrant": { description: "", title: "Entrant" },
      "/gallery": { description: "", title: "Gallery" },
      "/projects": { description: "", title: "Projects" },
      "/management": { description: "", title: "Management" },
      "/schedule": { description: "", title: "Lesson Schedule" },
      "/schedule-session": { description: "", title: "Session Schedule" },
      "/contacts": { description: "", title: "Contacts" },
      "/news/details": { description: "", title: "News Details" },
      "/events/details": { description: "", title: "Event Details" },
      "/profile": { description: "", title: "User Profile" },
      "/register-user": { description: "", title: "Register User" },
      "/users": { description: "", title: "All Users" },
      "/create-news": { description: "", title: "Create News" },
      "/create-event": { description: "", title: "Create Event" },
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
