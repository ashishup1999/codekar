import API_CONSTANTS from "@/constants/Routes";
import { ajaxAPI } from "@/utils/CommonUtils";
import axios from "axios";

const getHtmlPreview = async (payload: any) => {
  return await ajaxAPI.post(API_CONSTANTS.HTML_PREVIEW, payload);
};

export { getHtmlPreview };
