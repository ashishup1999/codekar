import axios from "axios";

export const ajaxAPI = {
  headers: {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "http://127.0.0.1:3000",
    optionsSuccessStatus: 200,
  },
  get: async (url: string, config: any) => {
    return axios.get(url, { ...{ headers: ajaxAPI.headers }, ...config });
  },
  post: async (url: string, payload: any, ...config: any) => {
    return axios.post(url, payload, {
      ...{ headers: ajaxAPI.headers },
      ...config[0],
    });
  },
};

export const defaultStateReducer = (state: any, action: any) => {
  const { payload } = action;
  const newState = { ...state, ...payload };
  return { ...newState };
};

export const getPreview = (values: { [key: string]: string }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Title Here</title>
    <style>
      ${values?.css}
    </style>
  </head>
  <body>
  
  ${values?.html}
  
    <script>
    ${values?.javascript}
    </script>
  </body>
  </html>`;
};
