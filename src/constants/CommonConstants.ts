import { COMMON_IMAGES, OPTION_ICONS } from "./StaticImages";

export const GRADIENTS = {
  radialBlackBlue:
    "radial-gradient(circle, rgba(46,46,46,1) 0%, rgba(0,0,0,1) 100%)",
  lightPurple:
    "linear-gradient(0deg,rgb(104, 10, 104) 0%,rgb(132, 24, 132) 100%)",
  purple: "linear-gradient(0deg,rgb(104, 10, 104) 0%, rgb(66, 16, 66) 100%)",
  lightBlue: "linear-gradient(0deg, #0EA8D9 0%, #075973 100%)",
  lightGreen: "linear-gradient(0deg, #40AA26 0%, #2C7719 100%)",
  redishPink: "linear-gradient(0deg, #2b2b2bff 0%, #030303ff 100%)",
  whiteGreyish: "linear-gradient(0deg, #FFFEFE 0%, #777777 100%)",
};

export const COLORS = {
  purple: "#680a68",
  blue: "#0EA8D9",
  green: "#3FA526",
  brightRed: "#E31D29",
  bluishBlack: "#11051F",
  vsBlack: "#1E1E1E",
  githubDark: "#24292E",
  githubBlue: "#01346E",
  greenBoard: "#035430",
  offWhite: "#FAF9F6",
};

export const HOME_OPTIONS = [
  {
    imgSrc: OPTION_ICONS.ui,
    imgAlt: "UI/UX",
    toRoute: "/projects",
    themeColor: COLORS.purple,
    themeGrad: GRADIENTS.lightPurple,
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
  appName: "odepulse",
  copyRight: "Codepulse © 2025",
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
  INVALID_PASSWORD: "Please enter valid password",
  EMAIL_ALREADY_IN_USE: "Email already in use",
  USERNAME_ALREADY_IN_USE: "USERNAME_ALREADY_IN_USE",
  UPDATED_SUCCESSFULY: "UPDATED_SUCCESSFULY",
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

export const LANGUAGE_MODES: { [key: string]: string } = {
  java: "java",
  python: "python",
  javascript: "javascript",
  go: "golang",
  cpp: "c_cpp",
  html: "html",
  css: "css",
};

export const TEST_REGEX = {
  email:
    /^([a-zA-Z0-9]{1})([a-zA-Z0-9._]*)([a-zA-Z0-9]{1})([@]{1})([a-zA-Z0-9]+)([.]{1})([a-zA-Z0-9]+)$/,
  userName: /^([a-zA-Z0-9_]+)$/,
  fullName: /^([a-zA-Z ]*[a-zA-Z]{1})$/,
  anythingWithoutSpace: /^([\S]+)$/,
  alphaNumeric: /^([a-zA-Z0-9]+)$/,
  number: /^([0-9]+)$/,
  alphabets: /^([a-zA-Z]+)$/,
  otp: /^([0-9]{6})$/,
};
