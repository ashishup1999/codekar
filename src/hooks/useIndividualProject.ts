import { PROJECT_FILES } from "@/constants/CommonConstants";
import { defaultStateReducer, getPreview } from "@/utils/CommonUtils";
import { emmetHTML } from "emmet-monaco-es";
import { useEffect, useReducer } from "react";

const initialState: {
  currFile: string;
  values: {
    html: string;
    css: string;
    javascript: string;
  };
  preview: any;
} = {
  currFile: PROJECT_FILES.html.id,
  values: {
    html: "",
    css: "",
    javascript: "",
  },
  preview: null,
};

const useIndividualProject = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { currFile, values, preview, updatePreview } = state;

  useEffect(() => {
    getHtmlPreviewAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, updatePreview]);

  const selectFile = (val: string) => {
    dispatch({ payload: { currFile: val } });
  };

  const setValue = (key: string, val: string) => {
    dispatch({ payload: { values: { ...values, [key]: val } } });
  };

  const getHtmlPreviewAPI = () => {
    const data = getPreview(values);
    dispatch({ payload: { preview: data } });
  };

  const handleEditorDidMount = (_: any, monaco: any) => {
    if (currFile === PROJECT_FILES.html.id) emmetHTML(monaco);
  };

  return {
    currFile,
    values,
    preview,
    selectFile,
    setValue,
    handleEditorDidMount,
  };
};

export default useIndividualProject;
