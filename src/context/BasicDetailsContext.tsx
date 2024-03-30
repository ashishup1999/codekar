import { defaultStateReducer } from "@/utils/CommonUtils";
import { Dispatch, createContext, useReducer } from "react";

export const BasicDetailsInterface = createContext<{
  basicDetails: any;
  setBasicDetails: Dispatch<any>;
}>({ basicDetails: {}, setBasicDetails: () => {} });

const initialState = {
  userName: "",
  errorMsg: "",
};

const BasicDetailsContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  return (
    <BasicDetailsInterface.Provider
      value={{ basicDetails: state, setBasicDetails: dispatch }}
    >
      {children}
    </BasicDetailsInterface.Provider>
  );
};

export default BasicDetailsContext;
