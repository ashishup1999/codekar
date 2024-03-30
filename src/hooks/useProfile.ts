import { ERROR_MSGS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import userService from "@/services/UserService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";

const initialState = {
  fullName: "",
  connections: [],
  connModelOpen: false,
};

const useProfile = ({ profileUserName }: { profileUserName: string }) => {
  const { setBasicDetails } = useContext(BasicDetailsInterface);
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { fullName, connections, connModelOpen } = state;

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = async () => {
    try {
      const res = await userService.getUserInfo(profileUserName);
      if (res?.status != "SUCCESS") throw res;
      dispatch({
        payload: { fullName: res?.fullName, connections: res?.connections },
      });
    } catch (error: any) {
      if (error?.message === ERROR_MSGS.USER_DOES_NOT_EXISTS) {
        setBasicDetails({ payload: { errorMsg: error?.message } });
      } else {
        setBasicDetails({
          payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
        });
      }
    }
  };

  const logOut = () => {
    localStorage.removeItem("userName");
    setBasicDetails({ payload: { userName: "" } });
  };

  const connToggle = () => {
    dispatch({ payload: { connModelOpen: !connModelOpen } });
  };

  return { fullName, connections, connModelOpen, logOut, connToggle };
};

export default useProfile;
