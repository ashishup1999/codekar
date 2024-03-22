import { defaultStateReducer } from "@/utils/CommonUtils";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import wbService from "@/services/WbService";

const initialState: {
  wbName: string;
  wbs: Array<any>;
  isCreateModalOpen: boolean;
} = {
  wbName: "",
  wbs: [],
  isCreateModalOpen: false,
};

const useWb = ({ userName }: { userName: string }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { wbName, wbs, isCreateModalOpen } = state;

  useEffect(() => {
    if (userName) getAllWbs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  const getAllWbs = async () => {
    try {
      const res = await wbService.getAllWbByUser(userName);
      if (res?.status === "SUCCESS") {
        let allWbs: Array<any> = [];
        for (let i = 0; i < res?.wbs.length; i++) {
          const wb = res?.wbs[i];
          const tp: any = {
            id: wb.wbId,
            author: wb.userName,
            name: wb.wbName,
          };
          allWbs.push(tp);
        }
        dispatch({ payload: { wbs: allWbs } });
      } else throw res;
    } catch (error) {}
  };

  const onCreateNewClick = () => {
    dispatch({ payload: { isCreateModalOpen: true } });
  };

  const onCreateFile = async () => {
    try {
      const req = {
        userName,
        wbName,
      };
      const res = await wbService.createNewWb(req);
      if (res?.status !== "SUCCESS") throw res;
      dispatch({ payload: { isCreateModalOpen: false } });
      router.push(`/whiteboards/whiteboard/${res?.wbId}`);
    } catch (error) {}
  };

  const onFileNameChange = (e: any) => {
    const val = e.target.value;
    dispatch({ payload: { wbName: val } });
  };

  return {
    wbs,
    wbName,
    isCreateModalOpen,
    onCreateFile,
    onCreateNewClick,
    onFileNameChange,
  };
};

export default useWb;
