import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/ApiUtils";

const getProfilesByName = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.SEARCH_USERS, payload);
};

const getProjsByName = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.SEARCH_PROJS, payload);
};

const getPgsByName = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.SEARCH_PGS, payload);
};

const getWbsByName = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.SEARCH_WBS, payload);
};

const exploreService = {
  getProfilesByName,
  getProjsByName,
  getPgsByName,
  getWbsByName,
};

export default exploreService;
