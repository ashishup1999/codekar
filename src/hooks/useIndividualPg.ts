import { DEFAULT_PLAYGROUND } from "@/constants/CommonConstants";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useReducer } from "react";

const initialState: {
  selectedLang: string;
  values: any;
  input: string;
  output: string;
} = {
  selectedLang: DEFAULT_PLAYGROUND,
  values: {},
  input: "",
  output: "",
};

const useIndividualPg = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { selectedLang, values, input, output } = state;

  const selectLang = (e: any) => {
    const val: string = e.target.value.toLowerCase();
    dispatch({ payload: { selectedLang: val } });
  };

  const setValue = (key: string, val: string) => {
    dispatch({ payload: { values: { ...values, [key]: val } } });
  };

  const setInput = (val: string) => {
    dispatch({ payload: { input: val } });
  };

  const setOutput = (val: string) => {
    dispatch({ payload: { output: val } });
  };

  return {
    selectedLang,
    values,
    input,
    output,
    selectLang,
    setValue,
    setInput,
    setOutput,
  };
};

export default useIndividualPg;
