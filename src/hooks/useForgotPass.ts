import { defaultStateReducer } from "@/utils/CommonUtils";
import { useEffect, useReducer } from "react";
import { RESP_MESSAGES } from "@/constants/CommonConstants";
import { useRouter } from "next/navigation";
import authService from "@/services/AuthService";

interface StateInterface {
  values: {
    email: string;
    otp: string;
    newPass: string;
  };
  errors: {
    email: string;
    otp: string;
    newPass: string;
  };
  showPass: boolean;
  isBtnActive: boolean;
  alertMsg: string;
  changeAlert: string;
  currStep: number;
}

const initialState: StateInterface = {
  values: {
    email: "",
    otp: "",
    newPass: "",
  },
  errors: {
    email: "",
    otp: "",
    newPass: "",
  },
  showPass: false,
  isBtnActive: false,
  alertMsg: "",
  changeAlert: "",
  currStep: 0,
};

const useForgotPass = () => {
  const router = useRouter();
  const [state, dispatch]: [state: StateInterface, dispatch: any] = useReducer(
    defaultStateReducer,
    initialState
  );
  const {
    values,
    errors,
    showPass,
    isBtnActive,
    alertMsg,
    changeAlert,
    currStep,
  } = state;

  useEffect(() => {
    if (alertMsg) {
      setTimeout(() => {
        dispatch({ payload: { alertMsg: "" } });
      }, 3000);
    }
  }, [alertMsg]);

  useEffect(() => {
    if (changeAlert) {
      setTimeout(() => {
        dispatch({ payload: { changeAlert: "" } });
        router.push("/login");
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeAlert]);

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

  const onChangeOtp = (e: any) => {
    const val = e.target.value;
    const err = val.length ? "" : "Enter Valid OTP";
    dispatch({
      payload: {
        values: { ...values, otp: val },
        errors: { ...errors, otp: err },
      },
    });
  };

  const onChangeNewPassword = (e: any) => {
    const val = e.target.value;
    const err = val.length ? "" : "Enter Valid Password";
    dispatch({
      payload: {
        values: { ...values, newPass: val },
        errors: { ...errors, newPass: err },
      },
    });
  };

  const onEyeClick = () => {
    dispatch({ payload: { showPass: !showPass } });
  };

  const onGetOtp = async () => {
    try {
      const res = await authService.getOtp(values?.email);
      if (res?.status != "SUCCESS") throw res;
      dispatch({ payload: { currStep: 1 } });
    } catch (error: any) {
      if (RESP_MESSAGES[error?.message]) {
        dispatch({ payload: { alertMsg: RESP_MESSAGES[error?.message] } });
      } else {
        dispatch({ payload: { alertMsg: "Technical Error, Try again later" } });
      }
    }
  };

  const onOtpVerification = async () => {
    try {
      const req = { email: values?.email, otp: values?.otp };
      const res = await authService.validateOtp(req);
      if (res?.status != "SUCCESS") throw res;
      dispatch({ payload: { currStep: 2 } });
    } catch (error: any) {
      if (RESP_MESSAGES[error?.message]) {
        dispatch({ payload: { alertMsg: RESP_MESSAGES[error?.message] } });
      } else {
        dispatch({ payload: { alertMsg: "Technical Error, Try again later" } });
      }
    }
  };

  const onUpdatePass = async () => {
    try {
      const req = { email: values?.email, newPass: values?.newPass };
      const res = await authService.updatePassword(req);
      if (res?.status != "SUCCESS") throw res;
      dispatch({
        payload: { currStep: 3, changeAlert: "Password Updated Successfully" },
      });
    } catch (error: any) {
      if (RESP_MESSAGES[error?.message]) {
        dispatch({ payload: { alertMsg: RESP_MESSAGES[error?.message] } });
      } else {
        dispatch({ payload: { alertMsg: "Technical Error, Try again later" } });
      }
    }
  };

  useEffect(() => {
    dispatch({ payload: { isBtnActive: isValidButton() } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, currStep]);

  const isValidButton = () => {
    if (currStep == 0) return values?.email && !errors?.email;
    else if (currStep == 1) return values?.otp?.length === 6 && !errors?.otp;
    else return values?.newPass && !errors?.newPass;
  };

  return {
    values,
    errors,
    showPass,
    isBtnActive,
    alertMsg,
    changeAlert,
    currStep,
    onChangeEmail,
    onChangeOtp,
    onChangeNewPassword,
    onEyeClick,
    onGetOtp,
    onOtpVerification,
    onUpdatePass,
  };
};

export default useForgotPass;
