import axios from "axios";

let activeRequests = 0;

// Function to show the loader
function showLoader() {
  const loaderEle = document.getElementById("loader");
  if (activeRequests === 0 && loaderEle) {
    loaderEle.style.display = "flex";
  }
  activeRequests++;
}

// Function to hide the loader
function hideLoader() {
  activeRequests--;
  const loaderEle = document.getElementById("loader");
  if (activeRequests === 0 && loaderEle) {
    loaderEle.style.display = "none";
  }
}

export const ajaxAPI = {
  headers: {
    "Content-Type": "application/json",
  },
  get: async (url: string, ...config: any) => {
    showLoader();
    try {
      const res = await axios.get(url, {
        ...{ headers: ajaxAPI.headers },
        ...config,
      });
      hideLoader();
      return res.data;
    } catch (error: any) {
      hideLoader();
      return error.data;
    }
  },
  post: async (url: string, payload: any, ...config: any) => {
    showLoader();
    try {
      const res = await axios.post(url, payload, {
        ...{ headers: ajaxAPI.headers },
        ...config,
      });
      hideLoader();
      return res.data;
    } catch (error: any) {
      hideLoader();
      return error.data;
    }
  },
  postFormData: async (url: string, formData: any, ...config: any) => {
    showLoader();
    try {
      const res = await axios.post(url, formData, {
        ...{ headers: { "Content-Type": "multipart/form-data" } },
        ...config,
      });
      hideLoader();
      return res.data;
    } catch (error: any) {
      hideLoader();
      return error.data;
    }
  },
};
