const BASE_URL = "http://localhost:8080";
const API_CONSTANTS = {
  CREATE_ACCOUNT: `${BASE_URL}/createUserAccount`,
  AUTHENTICATE_USER: `${BASE_URL}/authenticateUser`,
  CREATE_PROJECT: `${BASE_URL}/createNewProjectByUser`,
  GET_ALL_PROJS_BY_USER: `${BASE_URL}/getAllProjectsByUser`,
  GET_PROJ_BY_ID: `${BASE_URL}/getProjectById`,
  UPDATE_PROJ: `${BASE_URL}/updateProject`,
  GET_PROJ_THUMBNAIL: `${BASE_URL}/getProjectThumbnail`
};

export default API_CONSTANTS;
