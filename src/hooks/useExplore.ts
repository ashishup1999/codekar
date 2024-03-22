import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import exploreService from "@/services/ExploreService";
import userService from "@/services/UserService";
import { debounce, defaultStateReducer } from "@/utils/CommonUtils";
import {
  MouseEventHandler,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

interface StateInterface {
  searchKey: string;
  profiles: Array<any>;
  projs: Array<any>;
  pgs: Array<any>;
  wbs: Array<any>;
  pageNos: {
    profiles: number;
    projs: number;
    pgs: number;
    wbs: number;
  };
  connections: Array<string>;
  connUpdatedKey: boolean;
}

const initialState: StateInterface = {
  searchKey: "",
  profiles: [],
  projs: [],
  pgs: [],
  wbs: [],
  pageNos: {
    profiles: 1,
    projs: 1,
    pgs: 1,
    wbs: 1,
  },
  connections: [],
  connUpdatedKey: false,
};

const useExplore = () => {
  const [state, dispatch]: [state: StateInterface, dispatch: Function] =
    useReducer(defaultStateReducer, initialState);
  const { searchKey, profiles, projs, pgs, wbs, pageNos, connections, connUpdatedKey } = state;
  const [debTimer, setDebTimer]: [debTimer: any, setDebTimer: any] = useState();
  const profilesRef = useRef<HTMLDivElement>(null);
  const projsRef = useRef<HTMLDivElement>(null);
  const pgsRef = useRef<HTMLDivElement>(null);
  const wbsRef = useRef<HTMLDivElement>(null);
  const { basicDetails } = useContext(BasicDetailsInterface);

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
      payload: {
        searchKey: val,
        profiles: [],
        projs: [],
        pgs: [],
        wbs: [],
        pageNos: {
          profiles: 1,
          projs: 1,
          pgs: 1,
          wbs: 1,
        },
      },
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
      if (profiles.length < (pageNos.profiles - 1) * 10) return;
      const req: { name: string; pageNo: Number } = {
        name: searchKey,
        pageNo: pageNos.profiles,
      };
      const res: any = await exploreService.getProfilesByName(req);
      if (res?.status === "SUCCESS" && res?.profiles) {
        dispatch({
          payload: {
            profiles: [...profiles, ...res?.profiles],
            pageNos: { ...pageNos, profiles: pageNos.profiles + 1 },
          },
        });
      } else throw res;
    } catch (error) {}
  };

  const getProjs = async () => {
    try {
      if (projs.length < (pageNos.projs - 1) * 10) return;
      const req: { projName: string; pageNo: Number } = {
        projName: searchKey,
        pageNo: pageNos.projs,
      };
      const res: any = await exploreService.getProjsByName(req);
      if (res?.status === "SUCCESS" && res?.projects) {
        dispatch({
          payload: {
            projs: [...projs, ...res?.projects],
            pageNos: { ...pageNos, projs: pageNos.projs + 1 },
          },
        });
      } else throw res;
    } catch (error) {}
  };

  const getPgs = async () => {
    try {
      if (pgs.length < (pageNos.pgs - 1) * 10) return;
      const req: { pgName: string; pageNo: Number } = {
        pgName: searchKey,
        pageNo: pageNos.pgs,
      };
      const res: any = await exploreService.getPgsByName(req);
      if (res?.status === "SUCCESS" && res?.pgs) {
        dispatch({
          payload: {
            pgs: [...pgs, ...res?.pgs],
            pageNos: { ...pageNos, pgs: pageNos.pgs + 1 },
          },
        });
      } else throw res;
    } catch (error) {}
  };

  const getWbs = async () => {
    try {
      if (wbs.length < (pageNos.wbs - 1) * 10) return;
      const req: { wbName: string; pageNo: Number } = {
        wbName: searchKey,
        pageNo: pageNos.wbs,
      };
      const res: any = await exploreService.getWbsByName(req);
      if (res?.status === "SUCCESS" && res?.wbs) {
        dispatch({
          payload: {
            wbs: [...wbs, ...res?.wbs],
            pageNos: { ...pageNos, wbs: pageNos.wbs + 1 },
          },
        });
      } else throw res;
    } catch (error) {}
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
    } catch (error) {}
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
    } catch (error) {}
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
