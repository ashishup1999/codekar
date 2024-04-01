import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/ApiUtils";

const connectionReq = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CONNECTION_REQ, payload);
};

const connectionStatus = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CONNECTION_STATUS, payload);
};

const addUserConnection = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.ADD_CONNECTION, payload);
};

const rejectConnectionReq = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.REJECT_CONNECTION_REQ, payload);
};

const removeUserConnection = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.REMOVE_CONNECTION, payload);
};

const getAllConnReqsByUser = async (userName: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.GET_ALL_CONN_REQS}/${userName}`);
};

const getConnectionsByUser = async (userName: string) => {
  return await ajaxAPI.get(
    `${API_CONSTANTS.GET_CONNECTIONS_BY_USER}/${userName}`
  );
};

const getUserInfo = async (userName: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.USER_INFO}/${userName}`);
};

const userService = {
  connectionReq,
  connectionStatus,
  addUserConnection,
  rejectConnectionReq,
  removeUserConnection,
  getAllConnReqsByUser,
  getConnectionsByUser,
  getUserInfo,
};
export default userService;
