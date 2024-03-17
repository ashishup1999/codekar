import authService from "@/services/AuthService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { RESP_MESSAGES } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

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
  isBtnActive: boolean;
  alertMsg: string;
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
  isBtnActive: false,
  alertMsg: "",
};

const useLogin = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { setBasicDetails } = useContext(BasicDetailsInterface);
  const { values, errors, showPass, rememberMe, isBtnActive, alertMsg } = state;
  const router = useRouter();

  useEffect(() => {
    if (alertMsg) {
      setTimeout(() => {
        dispatch({ payload: { alertMsg: "" } });
      }, 3000);
    }
  }, [alertMsg]);

  useEffect(() => {
    if (validateFields()) {
      dispatch({ payload: { isBtnActive: true } });
    } else {
      dispatch({ payload: { isBtnActive: false } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, errors]);

  const validateFields = () => {
    for (let key in values) {
      if (!values[key] || errors[key]) return false;
    }
    return true;
  };

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

  const onProceed = async () => {
    try {
      const reqPayload = {
        userName: values.userName,
        password: values.password,
      };
      const res = await authService.authenticateUser(reqPayload);
      if (res?.status === "SUCCESS") {
        localStorage.removeItem("userName");
        if (rememberMe) {
          localStorage.setItem("userName", values.userName);
        }
        setBasicDetails({ payload: { userName: values.userName } });
        router.push("/");
      } else throw res;
    } catch (error: any) {
      if (RESP_MESSAGES[error?.message]) {
        dispatch({ payload: { alertMsg: RESP_MESSAGES[error?.message] } });
      } else {
        dispatch({ payload: { alertMsg: "Technical Error, Try again later" } });
      }
    }
  };

  return {
    values,
    errors,
    showPass,
    rememberMe,
    isBtnActive,
    alertMsg,
    onChangeUserName,
    onChangePassword,
    onEyeClick,
    onRememberMe,
    onProceed,
  };
};

export default useLogin;
