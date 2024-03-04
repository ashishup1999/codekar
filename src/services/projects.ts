import API_CONSTANTS from "@/constants/Routes";
import { ajaxAPI } from "@/utils/CommonUtils";

const getHtmlPreview = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.HTML_PREVIEW, payload);
};

export { getHtmlPreview };
