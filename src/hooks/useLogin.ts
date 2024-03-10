import { defaultStateReducer } from "@/utils/CommonUtils";
import { useReducer } from "react";

const initialState: {
  values: {
    userName: string;
    password: string;
  };
  errors: {
    userName: string;
    password: string;
  };
  showPass: boolean;
  rememberMe: boolean;
} = {
  values: {
    userName: "",
    password: "",
  },
  errors: {
    userName: "",
    password: "",
  },
  showPass: false,
  rememberMe: false,
};

const useLogin = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { values, errors, showPass, rememberMe } = state;

  const onChangeUserName = (e: any) => {
    const val = e.target.value;
    const err = val.length ? "" : "Enter Valid User Name";
    dispatch({
      payload: {
        values: { ...values, userName: val },
        errors: { ...errors, userName: err },
      },
    });
  };

  const onChangePassword = (e: any) => {
    const val = e.target.value;
    const err = val.length ? "" : "Enter Valid Password";
    dispatch({
      payload: {
        values: { ...values, password: val },
        errors: { ...errors, password: err },
      },
    });
  };

  const onEyeClick = () => {
    dispatch({ payload: { showPass: !showPass } });
  };

  const onRememberMe = () => {
    dispatch({ payload: { rememberMe: !rememberMe } });
  };

  return {
    values,
    errors,
    showPass,
    rememberMe,
    onChangeUserName,
    onChangePassword,
    onEyeClick,
    onRememberMe,
  };
};

export default useLogin;
