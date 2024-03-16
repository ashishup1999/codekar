const BASE_URL = "http://localhost:8080";
const API_CONSTANTS = {
  CREATE_ACCOUNT: `${BASE_URL}/createUserAccount`,
  AUTHENTICATE_USER: `${BASE_URL}/authenticateUser`,
  CREATE_PROJECT: `${BASE_URL}/createNewProjectByUser`,
  GET_ALL_PROJS_BY_USER: `${BASE_URL}/getAllProjectsByUser`,
  GET_PROJ_BY_ID: `${BASE_URL}/getProjectById`,
  UPDATE_PROJ: `${BASE_URL}/updateProject`,
  CREATE_PG: `${BASE_URL}/createNewPgByUser`,
  GET_ALL_PGS_BY_USER: `${BASE_URL}/getAllPgsByUser`,
  GET_PG_BY_ID: `${BASE_URL}/getPgById`,
  UPDATE_PG: `${BASE_URL}/updatePg`,
  CREATE_WB: `${BASE_URL}/createNewWbByUser`,
  GET_ALL_WBS_BY_USER: `${BASE_URL}/getAllWbsByUser`,
  GET_WB_BY_ID: `${BASE_URL}/getWbById`,
  UPDATE_WB: `${BASE_URL}/updateWb`,
  COMPILE:`${BASE_URL}/compile`
};

export default API_CONSTANTS;
