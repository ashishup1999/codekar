import { defaultStateReducer } from "@/utils/CommonUtils";
import { useReducer } from "react";

const initialState: {
  notifCnt: number;
  notifModalOpen: boolean;
} = {
  notifCnt: 0,
  notifModalOpen: false,
};

const useNotificaton = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { notifCnt, notifModalOpen } = state;

  const notifModalToggle = () => {
    dispatch({ payload: { notifModalOpen: !notifModalOpen } });
  };

  const setNotifCount = (val: number) => {
    dispatch({ payload: { notifCnt: val } });
  };

  return { notifCnt, notifModalOpen, notifModalToggle, setNotifCount };
};

export default useNotificaton;
