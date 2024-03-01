import { OPTION_ICONS } from "./StaticImages";

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
    toRoute: "/projects",
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
  appName1: "CODE",
  appName2: "KAR",
  copyRight:"CodeKar © 2024"
};
