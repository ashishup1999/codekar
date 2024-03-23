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
    } catch (error) {}
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
