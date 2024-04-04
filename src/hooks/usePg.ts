import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import pgService from "@/services/PgService";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { ERROR_MSGS } from "@/constants/CommonConstants";

const initialState: {
  pgName: string;
  pgs: Array<any>;
  isCreateModalOpen: boolean;
  compKey: boolean;
} = {
  pgName: "",
  pgs: [],
  isCreateModalOpen: false,
  compKey: true,
};

const usePg = ({ userName }: { userName: string }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { pgName, pgs, isCreateModalOpen, compKey } = state;
  const { setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    if (userName) getAllPgs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, compKey]);

  const getAllPgs = async () => {
    try {
      const res = await pgService.getAllPgByUser(userName);
      if (res?.status === "SUCCESS") {
        let allPgs: Array<any> = [];
        for (let i = 0; i < res?.pgs?.length; i++) {
          const pg = res?.pgs[i];
          const tp: any = {
            id: pg.pgId,
            author: pg.userName,
            name: pg.pgName,
          };
          allPgs.push(tp);
        }
        dispatch({ payload: { pgs: allPgs } });
      } else throw res;
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

  const createNewToggle = () => {
    dispatch({ payload: { isCreateModalOpen: !isCreateModalOpen } });
  };

  const onCreateFile = async () => {
    try {
      const req = {
        userName,
        pgName,
      };
      const res = await pgService.createNewPg(req);
      if (res?.status !== "SUCCESS") throw res;
      dispatch({ payload: { isCreateModalOpen: false } });
      router.push(`/playgrounds/pg/${res?.pgId}`);
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const onFileNameChange = (e: any) => {
    const val = e.target.value;
    dispatch({ payload: { pgName: val } });
  };

  const deletePg = async (id: string) => {
    try {
      const res = await pgService.deletePg(id);
      if (res?.status !== "SUCCESS") throw res;
      dispatch({ payload: { compKey: !compKey } });
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  return {
    pgs,
    pgName,
    isCreateModalOpen,
    onCreateFile,
    createNewToggle,
    onFileNameChange,
    deletePg,
  };
};

export default usePg;
