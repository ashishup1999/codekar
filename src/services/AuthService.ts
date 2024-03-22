import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/CommonUtils";

const createUserAccount = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CREATE_ACCOUNT, payload);
};

const authenticateUser = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.AUTHENTICATE_USER, payload);
};

const authService = {
  createUserAccount,
  authenticateUser,
};
export default authService;
