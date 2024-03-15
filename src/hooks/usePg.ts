import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import pgService from "@/services/PgService";

const initialState: {
  pgName: string;
  pgs: Array<any>;
  isCreateModalOpen: boolean;
} = {
  pgName: "",
  pgs: [],
  isCreateModalOpen: false,
};

const usePg = () => {
  const router = useRouter();
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { pgName, pgs, isCreateModalOpen } = state;

  useEffect(() => {
    if (userName) getAllPgs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  const getAllPgs = async () => {
    try {
      const res = await pgService.getAllPgByUser(userName);
      if (res?.status === "SUCCESS") {
        let allPgs: Array<any> = [];
        for (let i = 0; i < res?.pgs.length; i++) {
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
    } catch (error) {}
  };

  const onCreateNewClick = () => {
    dispatch({ payload: { isCreateModalOpen: true } });
  };

  const onCreateFile = async () => {
    try {
      const req = {
        userName: basicDetails?.userName,
        pgName,
      };
      const res = await pgService.createNewPg(req);
      if (res?.status !== "SUCCESS") throw res;
      dispatch({ payload: { isCreateModalOpen: false } });
      router.push(`/playgrounds/${res?.pgId}`);
    } catch (error) {}
  };

  const onFileNameChange = (e: any) => {
    const val = e.target.value;
    dispatch({ payload: { pgName: val } });
  };

  return {
    pgs,
    pgName,
    isCreateModalOpen,
    onCreateFile,
    onCreateNewClick,
    onFileNameChange,
  };
};

export default usePg;
