import { OPTION_ICONS } from "./StaticImages";

export const PUBLIC_ROUTES = ["/login", "/signUp", "/forgotPassword"];

export const HOME_OPTIONS = [
  {
    imgSrc: OPTION_ICONS.ui,
    imgAlt: "UI/UX",
    toRoute: "/projects",
    themeColor: "#DD5407",
    buttonTitle: "Projects",
  },
  {
    imgSrc: OPTION_ICONS.playCode,
    imgAlt: "plgs",
    toRoute: "/playgrounds",
    themeColor: "#0EA8D9",
    buttonTitle: "Playgrounds",
  },
  {
    imgSrc: OPTION_ICONS.whiteBoard,
    imgAlt: "wbs",
    toRoute: "/whiteboards",
    themeColor: "#3FA526",
    buttonTitle: "Whiteboards",
  },
  {
    imgSrc: OPTION_ICONS.search,
    imgAlt: "explr",
    toRoute: "/explore",
    themeColor: "#E31D29",
    buttonTitle: "Explore",
  },
];

export const COLOR_CONSTANTS = {
  red: "#E51C1C",
  purple: "#351577",
};

export const COMMON_TEXTS = {
  appName: "CodeKar",
  copyRight: "CodeKar © 2024",
};

export const LINEAR_GRADS: { [key: string]: string } = {
  orange:
    "linear-gradient(180deg, rgba(221,84,7,1) 0%, rgba(221,84,7,0.73) 100%)",
  blue: "linear-gradient(180deg, rgba(14,168,217,1) 0%, rgba(14,168,217,0.73) 100%)",
  green:
    "linear-gradient(180deg, rgba(63,165,38,1) 0%, rgba(63,165,38,0.73) 100%)",
  brightRed:
    "linear-gradient(180deg, rgba(227,29,41,1) 0%, rgba(227,29,41,0.73) 100%)",
  brandText:
    "linear-gradient(180deg, rgba(229,28,28,1) 0%, rgba(91,16,127,1) 100%)",
};

export const HEADER_TO_GRADIENT: { [key: string]: string } = {
  projects: LINEAR_GRADS.orange,
  playgrounds: LINEAR_GRADS.blue,
  whiteboards: LINEAR_GRADS.green,
  explore: LINEAR_GRADS.brightRed,
};

export const COLORS: { [key: string]: string } = {
  orange: "#DD5407",
  blue: "#0EA8D9",
  green: "#3FA526",
  brightRed: "#E31D29",
};

export const HEADER_TO_BORDER_CLR: { [key: string]: string } = {
  projects: COLORS.orange,
  playgrounds: COLORS.blue,
  whiteboards: COLORS.green,
  explore: COLORS.brightRed,
};

export const PROJECT_FILES: { [key: string]: { id: string; name: string } } = {
  html: { id: "html", name: "index.html" },
  css: { id: "css", name: "style.css" },
  javascript: { id: "javascript", name: "script.js" },
};

export const PG_LANG_OPTIONS: { [key: string]: string } = {
  python: "Python",
  javascript: "Javascript",
  java: "Java",
  cpp: "CPP",
  go: "Go",
};

export const DEFAULT_PLAYGROUND = "python";

export const RESP_MESSAGES: { [key: string]: string } = {
  DB_ERR: "Data Fetch Error",
  USER_ALREADY_EXISTS: "Username/Email already exists, Please Login",
  USER_DOES_NOT_EXIST: "Username does not exists, Pleaase Sign Up",
  FALSE_CREDS: "False, credential, Please try again",
};
