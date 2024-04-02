import { ERROR_MSGS, RESP_MESSAGES } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import userService from "@/services/UserService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { Dispatch, useContext, useEffect, useReducer } from "react";

interface initIfc {
  values: { [key: string]: any };
  errors: { [key: string]: any };
  showPass: boolean;
  change: { [key: string]: any };
  isBtnActive: boolean;
  alertMsg: string;
  changeAlert: string;
}

const initialState: initIfc = {
  values: {
    userName: "",
    email: "",
    fullName: "",
    currPassword: "",
    password: "",
  },
  errors: {
    userName: "",
    email: "",
    fullName: "",
    currPassword: "",
    password: "",
  },
  showPass: false,
  change: {
    userName: false,
    email: false,
    fullName: false,
    password: false,
  },
  isBtnActive: false,
  alertMsg: "",
  changeAlert: "",
};

const useEditProfile = ({ modalToggle }: { modalToggle: Function }) => {
  const [state, dispatch]: [state: initIfc, dispatch: Dispatch<any>] =
    useReducer(defaultStateReducer, initialState);
  const {
    values,
    errors,
    showPass,
    change,
    isBtnActive,
    alertMsg,
    changeAlert,
  } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);

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
        modalToggle();
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeAlert]);

  useEffect(() => {
    if (validateFields()) {
      dispatch({ payload: { isBtnActive: true } });
    } else {
      dispatch({ payload: { isBtnActive: false } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, errors, change]);

  const validateFields = () => {
    let isValid = true;
    Object.keys(change).forEach((key: string) => {
      if (change[key] && (!values[key] || errors[key])) {
        isValid = false;
      }
    });
    return isValid && values.currPassword && !errors.currPassword;
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

  const onChangeCurrPassword = (e: any) => {
    const val = e.target.value;
    const err = val.length ? "" : "Enter Valid Password";
    dispatch({
      payload: {
        values: { ...values, currPassword: val },
        errors: { ...errors, currPassword: err },
      },
    });
  };

  const onChangeNewPassword = (e: any) => {
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

  const onChangeClick = (key: string) => {
    dispatch({ payload: { change: { ...change, [key]: !change[key] } } });
  };

  const onProceed = async () => {
    try {
      const req = {
        userName: basicDetails?.userName,
        newUserName: change?.userName ? values?.userName : "",
        newEmail: change?.email ? values?.email : "",
        newFullName: change?.fullName ? values?.fullName : "",
        newPassword: change?.password ? values?.password : "",
        currPassword: values?.currPassword,
      };
      const res = await userService.updateUserDetails(req);
      if (
        res?.status === "SUCCESS" &&
        res?.message === RESP_MESSAGES.UPDATED_SUCCESSFULY
      ) {
        dispatch({ payload: { changeAlert: "Changes Saved" } });
      } else throw res;
    } catch (error: any) {
      if (Object.keys(RESP_MESSAGES).includes(error?.message)) {
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
    change,
    isBtnActive,
    alertMsg,
    changeAlert,
    onChangeUserName,
    onChangeEmail,
    onChangeFullName,
    onChangeCurrPassword,
    onChangeNewPassword,
    onEyeClick,
    onChangeClick,
    onProceed,
  };
};

export default useEditProfile;
