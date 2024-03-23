import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/CommonUtils";

const createUserAccount = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.CREATE_ACCOUNT, payload);
};

const authenticateUser = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.AUTHENTICATE_USER, payload);
};

const getOtp = async (email: string) => {
  return await ajaxAPI.get(`${API_CONSTANTS.GET_OTP}/${email}`);
};

const validateOtp = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.VALIDATE_OTP, payload);
};

const updatePassword = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.UPDATE_PASSWORD, payload);
};

const authService = {
  createUserAccount,
  authenticateUser,
  getOtp,
  validateOtp,
  updatePassword,
};
export default authService;
