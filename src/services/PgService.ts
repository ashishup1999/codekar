import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/ApiUtils";

const createNewPg = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CREATE_PG, payload);
};

const getAllPgByUser = async (userName: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.GET_ALL_PGS_BY_USER}/${userName}`);
};

const getPgById = async (id: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.GET_PG_BY_ID}/${id}`);
};

const updatePg = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.UPDATE_PG, payload);
};

const deletePg = async (id: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.DELETE_PG}/${id}`);
};

const pgService = {
  createNewPg,
  getAllPgByUser,
  getPgById,
  updatePg,
  deletePg,
};

export default pgService;
