import userService from "@/services/UserService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useRouter } from "next/navigation";
import { useEffect, useReducer } from "react";

const initialState = {
  fullName: "",
};

const useProfile = ({ profileUserName }: { profileUserName: string }) => {
  const router = useRouter();
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
      dispatch({ payload: { connections: res?.connections } });
    } catch (error) {}
  };

  const logOut = () => {
    localStorage.removeItem("userName");
    router.push("/login");
  };

  return { fullName, logOut };
};

export default useProfile;
