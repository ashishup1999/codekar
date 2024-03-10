import axios from "axios";

export const ajaxAPI = {
  headers: {
    "Content-Type": "application/json",
  },
  get: async (url: string, config: any) => {
    const res = await axios.get(url, {
      ...{ headers: ajaxAPI.headers },
      ...config,
    });
    return res.data;
  },
  post: async (url: string, payload: any, ...config: any) => {
    const res = await axios.post(url, payload, {
      ...{ headers: ajaxAPI.headers },
      ...config,
    });
    return res.data;
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
      html {
        width: 100%;
        height: 100%;
      }
      body {
        width: 100%;
        height: 100%;
        margin:0;
        padding:0;
        box-sizing: border-box;
      }
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
