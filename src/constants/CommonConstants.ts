import { COMMON_IMAGES, OPTION_ICONS } from "./StaticImages";

export const GRADIENTS = {
  radialBlackRed: "radial-gradient(circle at center, #642121 0, #000000 100%)",
  lightOrange: "linear-gradient(0deg, #F1722B 0%, #9D491A 100%)",
  orange: "linear-gradient(0deg, #DD5407 0%, #772D04 100%)",
  lightBlue: "linear-gradient(0deg, #0EA8D9 0%, #075973 100%)",
  lightGreen: "linear-gradient(0deg, #40AA26 0%, #2C7719 100%)",
  redishPink: "linear-gradient(0deg, #DF3A3A 0%, #7D1017 100%)",
  whiteGreyish: "linear-gradient(0deg, #FFFEFE 0%, #777777 100%)",
};

export const COLORS = {
  orange: "#DD5407",
  blue: "#0EA8D9",
  green: "#3FA526",
  brightRed: "#E31D29",
  bluishBlack: "#11051F",
  vsBlack: "#1E1E1E",
};

export const HOME_OPTIONS = [
  {
    imgSrc: OPTION_ICONS.ui,
    imgAlt: "UI/UX",
    toRoute: "/projects",
    themeColor: COLORS.orange,
    themeGrad: GRADIENTS.lightOrange,
    buttonTitle: "Projects",
    userDep: true,
  },
  {
    imgSrc: OPTION_ICONS.playCode,
    imgAlt: "plgs",
    toRoute: "/playgrounds",
    themeColor: COLORS.blue,
    themeGrad: GRADIENTS.lightBlue,
    buttonTitle: "Playgrounds",
    userDep: true,
  },
  {
    imgSrc: OPTION_ICONS.whiteBoard,
    imgAlt: "wbs",
    toRoute: "/whiteboards",
    themeColor: COLORS.green,
    themeGrad: GRADIENTS.lightGreen,
    buttonTitle: "Whiteboards",
    userDep: true,
  },
  {
    imgSrc: OPTION_ICONS.search,
    imgAlt: "explr",
    toRoute: "/explore",
    themeColor: COLORS.brightRed,
    themeGrad: GRADIENTS.redishPink,
    buttonTitle: "Explore",
    userDep: false,
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
  DB_ERROR: "Data Fetch Error",
  USER_ALREADY_EXISTS: "Username/Email already exists, Please Login",
  USER_DOES_NOT_EXIST: "Username does not exists, Please Sign Up",
  EMAIL_DOES_NOT_EXIST: "Email does not exists, Please Sign Up",
  FALSE_CREDS: "False, credential, Please try again",
  OTP_GENERATION_FAILED: "Could not generate otp, please try again later",
  UNABLE_TO_SEND_MAIL: "Unable to send mail, please try again later",
  PASSWORD_COULD_NOT_BE_UPDATED:
    "Could not update password, please try again later",
  INVALID_OTP: "Invalid OTP",
};

export const FULL_PAGE_ERRORS: { [key: string]: any } = {
  USER_DOES_NOT_EXISTS: {
    icon: COMMON_IMAGES.notFound,
    text: "This username does not exists in our database",
  },
  TOKEN_EXPIRE: {
    icon: COMMON_IMAGES.tokenExpire,
    text: "Token seems to be expired please refresh to create a new session",
  },
  TECH_ERROR: {
    icon: COMMON_IMAGES.techErr,
    text: "There is some issue on server side we are trying to fix it soon.",
  },
  PROJECT_DOES_NOT_EXISTS: {
    icon: COMMON_IMAGES.notFound,
    text: "This project does not exists",
  },
  PG_DOES_NOT_EXISTS: {
    icon: COMMON_IMAGES.notFound,
    text: "This playground does not exists",
  },
  WB_DOES_NOT_EXISTS: {
    icon: COMMON_IMAGES.notFound,
    text: "This whiteboard does not exists",
  },
};

export const ERROR_MSGS = {
  USER_DOES_NOT_EXISTS: "USER_DOES_NOT_EXISTS",
  TECH_ERROR: "TECH_ERROR",
  PROJECT_DOES_NOT_EXISTS: "PROJECT_DOES_NOT_EXISTS",
  PG_DOES_NOT_EXISTS: "PG_DOES_NOT_EXISTS",
  WB_DOES_NOT_EXISTS: "WB_DOES_NOT_EXISTS",
};

export const CONNECTION_STATUS: { [key: string]: any } = {
  connected: "CONNECTED",
  requested: "CONNECTION_REQUESTED",
  notConnected: "NOT_CONNECTED",
};
