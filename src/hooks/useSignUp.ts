import {
  ERROR_MSGS,
  RESP_MESSAGES,
  TEST_REGEX,
} from "@/constants/CommonConstants";
import authService from "@/services/AuthService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

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
  isBtnActive: boolean;
  alertMsg: string;
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
  isBtnActive: false,
  alertMsg: "",
};

const useSignUp = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { values, errors, showPass, isBtnActive, alertMsg } = state;
  const router = useRouter();
  const { setBasicDetails } = useContext(BasicDetailsInterface);

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
    const val = e.target.value
    let err;
    if (TEST_REGEX.userName.test(val)) {
      err = "";
    } else if (!val) {
      err = "Enter username";
    } else {
      err = "Username must have alphanumerics, underscore(_) and dot(.)";
    }
    dispatch({
      payload: {
        values: { ...values, userName: val },
        errors: { ...errors, userName: err },
      },
    });
  };

  const onChangeEmail = (e: any) => {
    const val = e.target.value;
    let err;
    if (TEST_REGEX.email.test(val)) {
      err = "";
    } else {
      err = "Enter valid full name";
    }
    dispatch({
      payload: {
        values: { ...values, email: val },
        errors: { ...errors, email: err },
      },
    });
  };

  const onChangeFullName = (e: any) => {
    const val = e.target.value;
    let err;
    if (TEST_REGEX.fullName.test(val)) {
      err = "";
    } else {
      err = "Enter valid full name";
    }
    dispatch({
      payload: {
        values: { ...values, fullName: val },
        errors: { ...errors, fullName: err },
      },
    });
  };

  const onChangePassword = (e: any) => {
    const val = e.target.value?.replace(/\s/, "");
    let err;
    if (TEST_REGEX.anythingWithoutSpace.test(val)) {
      err = "";
    } else {
      err = "Enter password";
    }
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

  const onProceed = async () => {
    try {
      const reqPayload = {
        userName: values.userName,
        password: values.password,
        email: values.email,
        fullName: values.fullName,
      };
      const res = await authService.createUserAccount(reqPayload);
      if (res?.status === "SUCCESS") {
        router.push("/login");
      } else throw res;
    } catch (error: any) {
      if (RESP_MESSAGES[error?.message]) {
        dispatch({ payload: { alertMsg: RESP_MESSAGES[error?.message] } });
      } else {
        setBasicDetails({
          payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
        });
      }
    }
  };

  return {
    values,
    errors,
    showPass,
    isBtnActive,
    alertMsg,
    onChangeUserName,
    onChangePassword,
    onChangeEmail,
    onChangeFullName,
    onEyeClick,
    onProceed,
  };
};

export default useSignUp;
