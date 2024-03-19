import { defaultStateReducer } from "@/utils/CommonUtils";
import { useRouter } from "next/navigation";
import { useReducer } from "react";

const initialState = {};

const useProfile = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const {} = state;

  const logOut = () => {
    localStorage.removeItem("userName");
    router.push("/login");
  };

  return { logOut };
};

export default useProfile;
