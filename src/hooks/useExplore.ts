import { ERROR_MSGS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import exploreService from "@/services/ExploreService";
import userService from "@/services/UserService";
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
  connUpdatedKey: boolean;
}

const initialState: StateInterface = {
  searchKey: "",
  profiles: [],
  projs: [],
  pgs: [],
  wbs: [],
  pageSize: 10,
  connections: [],
  connUpdatedKey: false,
};

const useExplore = () => {
  const [state, dispatch]: [state: StateInterface, dispatch: Function] =
    useReducer(defaultStateReducer, initialState);
  const {
    searchKey,
    profiles,
    projs,
    pgs,
    wbs,
    pageSize,
    connections,
    connUpdatedKey,
  } = state;
  const [debTimer, setDebTimer]: [debTimer: any, setDebTimer: any] = useState();
  const profilesRef = useRef<HTMLDivElement>(null);
  const projsRef = useRef<HTMLDivElement>(null);
  const pgsRef = useRef<HTMLDivElement>(null);
  const wbsRef = useRef<HTMLDivElement>(null);
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);

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
      if (profiles.length % 10 !== 0) return;
      const req: { name: string; pageNo: Number } = {
        name: searchKey,
        pageNo: Math.floor(profiles.length / pageSize) + 1,
      };
      const res: any = await exploreService.getProfilesByName(req);
      if (res?.status === "SUCCESS" && res?.profiles) {
        dispatch({ payload: { profiles: [...profiles, ...res?.profiles] } });
      } else if(res?.status !== "SUCCESS") throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getProjs = async () => {
    try {
      if (projs.length % 10 !== 0) return;
      const req: { projName: string; pageNo: Number } = {
        projName: searchKey,
        pageNo: Math.floor(projs.length / pageSize) + 1,
      };
      const res: any = await exploreService.getProjsByName(req);
      if (res?.status === "SUCCESS" && res?.projects) {
        dispatch({ payload: { projs: [...projs, ...res?.projects] } });
      } else if(res?.status !== "SUCCESS") throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getPgs = async () => {
    try {
      if (pgs.length % 10 !== 0) return;
      const req: { pgName: string; pageNo: Number } = {
        pgName: searchKey,
        pageNo: Math.floor(pgs.length / pageSize) + 1,
      };
      const res: any = await exploreService.getPgsByName(req);
      if (res?.status === "SUCCESS" && res?.pgs) {
        dispatch({ payload: { pgs: [...pgs, ...res?.pgs] } });
      } else if(res?.status !== "SUCCESS") throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getWbs = async () => {
    try {
      if (wbs.length % 10 !== 0) return;
      const req: { wbName: string; pageNo: Number } = {
        wbName: searchKey,
        pageNo: Math.floor(wbs.length / pageSize) + 1,
      };
      const res: any = await exploreService.getWbsByName(req);
      if (res?.status === "SUCCESS" && res?.wbs) {
        dispatch({ payload: { wbs: [...wbs, ...res?.wbs] } });
      } else if(res?.status !== "SUCCESS") throw  res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getFns = [getProfiles, getProjs, getPgs, getWbs];

  const handleScroll = (ref: any, fnNo: any) => {
    const cur = ref.current;
    if (cur && cur?.scrollLeft + cur?.clientWidth === cur?.scrollWidth) {
      getFns[fnNo]();
    }
  };

  useEffect(() => {
    getConnections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connUpdatedKey]);

  const getConnections = async () => {
    try {
      const res = await userService.getConnectionsByUser(
        basicDetails?.userName
      );
      if (res?.status != "SUCCESS") throw res;
      dispatch({ payload: { connections: res?.connections } });
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const onConnectClick = async (e: MouseEvent, otherUserName: string) => {
    e.stopPropagation();
    try {
      const req = {
        userName1: basicDetails?.userName,
        userName2: otherUserName,
      };
      const res = await userService.connectUsers(req);
      if (res?.status != "SUCCESS") throw res;
      dispatch({ payload: { connUpdatedKey: !connUpdatedKey } });
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
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
    onChangeSearch,
    handleScroll,
    onConnectClick,
  };
};

export default useExplore;
