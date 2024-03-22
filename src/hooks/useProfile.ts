import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import userService from "@/services/UserService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";

const initialState = {
  fullName: "",
};

const useProfile = ({ profileUserName }: { profileUserName: string }) => {
  const { setBasicDetails } = useContext(BasicDetailsInterface);
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { fullName } = state;

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = async () => {
    try {
      const res = await userService.getUserInfo(profileUserName);
      if (res?.status != "SUCCESS") throw res;
      dispatch({ payload: { fullName: res?.fullName } });
    } catch (error) {}
  };

  const logOut = () => {
    setBasicDetails({ payload: { userName: "" } });
    localStorage.removeItem("userName");
  };

  return { fullName, logOut };
};

export default useProfile;
