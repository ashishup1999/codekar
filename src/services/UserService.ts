import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/CommonUtils";

const connectUsers = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CONNECT, payload);
};

const getConnectionsByUser = async (userName: string) => {
  return await ajaxAPI.get(
    `${API_CONSTANTS.GET_CONNECTIONS_BY_USER}/${userName}`
  );
};

const getUserInfo = async (userName: string) => {
  return await ajaxAPI.get(
    `${API_CONSTANTS.USER_INFO}/${userName}`
  );
};

const userService = {
  connectUsers,
  getConnectionsByUser,
  getUserInfo
};
export default userService;
