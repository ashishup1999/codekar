import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/ApiUtils";

const compileCode = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.COMPILE, payload);
};

const commonService = {
  compileCode,
};
export default commonService;
