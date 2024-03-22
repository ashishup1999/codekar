import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/CommonUtils";

const createNewWb = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CREATE_WB, payload);
};

const getAllWbByUser = async (userName: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.GET_ALL_WBS_BY_USER}/${userName}`);
};

const getWbById = async (id: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.GET_WB_BY_ID}/${id}`);
};

const updateWb = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.UPDATE_WB, payload);
};

const wbService = {
  createNewWb,
  getAllWbByUser,
  getWbById,
  updateWb,
};

export default wbService;
