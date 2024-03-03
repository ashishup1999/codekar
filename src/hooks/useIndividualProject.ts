import { PROJECT_FILES } from "@/constants/CommonConstants";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useReducer } from "react";

const initialState: {
  currFile: string;
  values: {
    html: string;
    css: string;
    javascript: string;
  };
} = {
  currFile: PROJECT_FILES.html.id,
  values: {
    html: "",
    css: "",
    javascript: "",
  },
};

const useIndividualProject = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { currFile, values } = state;

  const selectFile = (val: string) => {
    dispatch({ payload: { currFile: val } });
  };

  const setValue = (key: string, val: string) => {
    dispatch({ payload: { values: { ...values, [key]: val } } });
  };

  return { currFile, values, selectFile, setValue };
};

export default useIndividualProject;
