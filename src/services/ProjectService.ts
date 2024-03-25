import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/ApiUtils";

const createNewProject = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CREATE_PROJECT, payload);
};

const getAllProjectsByUser = async (userName: string) => {
  return await ajaxAPI.get(
    `${API_CONSTANTS.GET_ALL_PROJS_BY_USER}/${userName}`
  );
};

const getProjectById = async (id: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.GET_PROJ_BY_ID}/${id}`);
};

const updateProject = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.UPDATE_PROJ, payload);
};

const deleteProject = async (id: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.DELETE_PROJ}/${id}`);
};

const projectService = {
  createNewProject,
  getAllProjectsByUser,
  getProjectById,
  updateProject,
  deleteProject,
};
export default projectService;
