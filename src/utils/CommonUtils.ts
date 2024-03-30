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

export function debounce(
  this: void,
  func: Function,
  timer: NodeJS.Timeout,
  setTimer: Function,
  timeout: number = 300
) {
  let tid: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    tid = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
    setTimer(tid);
  };
}

export const isObjEmpty = (obj: any) => {
  return obj || Object.keys(obj).length === 0;
};
