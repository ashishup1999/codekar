import API_CONSTANTS from "@/constants/APIRoutes";
import { ajaxAPI } from "@/utils/ApiUtils";

const uploadProfileImg = async (formData: any) => {
  return await ajaxAPI.postFormData(API_CONSTANTS.UPLOAD_PROFILE_IMG, formData);
};

const fileServices = {
  uploadProfileImg,
};

export default fileServices;
