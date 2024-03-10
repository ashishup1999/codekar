import { defaultStateReducer } from "@/utils/CommonUtils";
import { useReducer } from "react";

const initialState: {
  values: {
    userName: string;
    password: string;
    email: string;
    fullName: string;
  };
  errors: {
    userName: string;
    password: string;
    email: string;
    fullName: string;
  };
  showPass: boolean;
} = {
  values: {
    userName: "",
    password: "",
    email: "",
    fullName: "",
  },
  errors: {
    userName: "",
    password: "",
    email: "",
    fullName: "",
  },
  showPass: false,
};

const useSignUp = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { values, errors, showPass } = state;

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

  const onChangeEmail = (e: any) => {
    const val = e.target.value;
    const err = val.length ? "" : "Enter Valid Email";
    dispatch({
      payload: {
        values: { ...values, email: val },
        errors: { ...errors, email: err },
      },
    });
  };

  const onChangeFullName = (e: any) => {
    const val = e.target.value;
    const err = val.length ? "" : "Enter Valid Full Name";
    dispatch({
      payload: {
        values: { ...values, fullName: val },
        errors: { ...errors, fullName: err },
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

  return {
    values,
    errors,
    showPass,
    onChangeUserName,
    onChangePassword,
    onChangeEmail,
    onChangeFullName,
    onEyeClick,
  };
};

export default useSignUp;
