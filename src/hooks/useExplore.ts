import { ERROR_MSGS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import exploreService from "@/services/ExploreService";
import { debounce, defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer, useRef, useState } from "react";

interface StateInterface {
  searchKey: string;
  profiles: Array<any>;
  projs: Array<any>;
  pgs: Array<any>;
  wbs: Array<any>;
  pageSize: number;
  connections: Array<string>;
}

const initialState: StateInterface = {
  searchKey: "",
  profiles: [],
  projs: [],
  pgs: [],
  wbs: [],
  pageSize: 5,
  connections: [],
};

const useExplore = () => {
  const [state, dispatch]: [state: StateInterface, dispatch: Function] =
    useReducer(defaultStateReducer, initialState);
  const { searchKey, profiles, projs, pgs, wbs, pageSize, connections } = state;
  const [debTimer, setDebTimer]: [debTimer: any, setDebTimer: any] = useState();
  const profilesRef = useRef<HTMLDivElement>(null);
  const projsRef = useRef<HTMLDivElement>(null);
  const pgsRef = useRef<HTMLDivElement>(null);
  const wbsRef = useRef<HTMLDivElement>(null);
  const { setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    const allEachSections = document.querySelectorAll(".EachSection");
    allEachSections.forEach((es) => {
      es.addEventListener("wheel", (event: any) => {
        event.preventDefault();
        es.scrollLeft += 3 * event.deltaY;
      });
    });
  }, []);

  const onChangeSearch = (e: any) => {
    const val = e.target.value;
    dispatch({
      payload: { searchKey: val, profiles: [], projs: [], pgs: [], wbs: [] },
    });
  };

  const searchKeyWord = function () {
    if (searchKey) {
      getProfiles();
      getProjs();
      getPgs();
      getWbs();
    }
  };

  const delayedSearchKeyword = debounce(
    searchKeyWord,
    debTimer,
    setDebTimer,
    1000
  );

  useEffect(() => {
    delayedSearchKeyword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

  const getProfiles = async () => {
    try {
      if (profiles.length % pageSize !== 0) return;
      const req: { name: string; pageNo: Number; pageSize: Number } = {
        name: searchKey,
        pageNo: Math.floor(profiles.length / pageSize) + 1,
        pageSize,
      };
      const res: any = await exploreService.getProfilesByName(req);
      if (res?.status === "SUCCESS" && res?.profiles) {
        dispatch({ payload: { profiles: [...profiles, ...res?.profiles] } });
      } else if (res?.status !== "SUCCESS") throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getProjs = async () => {
    try {
      if (projs.length % pageSize !== 0) return;
      const req: { projName: string; pageNo: Number; pageSize: Number } = {
        projName: searchKey,
        pageNo: Math.floor(projs.length / pageSize) + 1,
        pageSize,
      };
      const res: any = await exploreService.getProjsByName(req);
      if (res?.status === "SUCCESS" && res?.projects) {
        dispatch({ payload: { projs: [...projs, ...res?.projects] } });
      } else if (res?.status !== "SUCCESS") throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getPgs = async () => {
    try {
      if (pgs.length % pageSize !== 0) return;
      const req: { pgName: string; pageNo: Number; pageSize: Number } = {
        pgName: searchKey,
        pageNo: Math.floor(pgs.length / pageSize) + 1,
        pageSize,
      };
      const res: any = await exploreService.getPgsByName(req);
      if (res?.status === "SUCCESS" && res?.pgs) {
        dispatch({ payload: { pgs: [...pgs, ...res?.pgs] } });
      } else if (res?.status !== "SUCCESS") throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getWbs = async () => {
    try {
      if (wbs.length % pageSize !== 0) return;
      const req: { wbName: string; pageNo: Number; pageSize: Number } = {
        wbName: searchKey,
        pageNo: Math.floor(wbs.length / pageSize) + 1,
        pageSize,
      };
      const res: any = await exploreService.getWbsByName(req);
      if (res?.status === "SUCCESS" && res?.wbs) {
        dispatch({ payload: { wbs: [...wbs, ...res?.wbs] } });
      } else if (res?.status !== "SUCCESS") throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getFns = [getProfiles, getProjs, getPgs, getWbs];

  const onViewMore = (fnNo: number) => {
    getFns[fnNo]();
  };

  return {
    profilesRef,
    projsRef,
    pgsRef,
    wbsRef,
    profiles,
    projs,
    pgs,
    wbs,
    searchKey,
    connections,
    pageSize,
    onChangeSearch,
    onViewMore,
  };
};

export default useExplore;
