import API_CONSTANTS from "@/constants/Routes";
import { ajaxAPI } from "@/utils/CommonUtils";

const compileCode = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.COMPILE, payload);
};

const commonService = {
  compileCode,
};
export default commonService;
