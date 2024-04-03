import { DEFAULT_PLAYGROUND, ERROR_MSGS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import commonService from "@/services/CommonService";
import wbService from "@/services/WbService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer, useRef } from "react";

interface GetWbRespIntr {
  status: string;
  message: string;
  wbData: {
    userName: string;
    wbName: string;
    javascript: string;
    java: string;
    python: string;
    cpp: string;
    go: string;
  };
}

const initialState: {
  wbName: string;
  wbAuthor: string;
  selectedLang: string;
  values: any;
  input: string;
  output: Array<string>;
  nameEdit: boolean;
  saved: boolean;
} = {
  wbName: "",
  wbAuthor: "",
  selectedLang: DEFAULT_PLAYGROUND,
  values: {},
  input: "",
  output: [],
  nameEdit: false,
  saved: false,
};

const useIndividualWb = ({ wbId }: { wbId: string }) => {
  const pageNameRef: any = useRef(null);
  const outRef: any = useRef(null);
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const {
    wbName,
    wbAuthor,
    selectedLang,
    values,
    input,
    output,
    nameEdit,
    saved,
  } = state;
  const { setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    getWbInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWbInfo = async () => {
    try {
      const res: GetWbRespIntr = await wbService.getWbById(wbId);
      if (res?.status != "SUCCESS") throw res;
      const { wbData } = res;
      const payload = {
        wbName: wbData?.wbName,
        wbAuthor: wbData?.userName,
        values: {
          javascript: wbData?.javascript,
          java: wbData?.java,
          python: wbData?.python,
          cpp: wbData?.cpp,
          go: wbData?.go,
        },
      };
      dispatch({ payload });
    } catch (error: any) {
      if (error?.message === ERROR_MSGS.WB_DOES_NOT_EXISTS) {
        setBasicDetails({ payload: { errorMsg: error?.message } });
      } else {
        setBasicDetails({
          payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
        });
      }
    }
  };

  const selectLang = (e: any) => {
    const val: string = e.target.value.toLowerCase();
    dispatch({ payload: { selectedLang: val } });
  };

  const setValue = (key: string, val: string) => {
    dispatch({ payload: { values: { ...values, [key]: val } } });
  };

  const setInput = (e: any) => {
    dispatch({ payload: { input: `${e?.target?.value}` } });
  };

  useEffect(() => {
    if (nameEdit && pageNameRef?.current) {
      pageNameRef.current.focus();
    }
  }, [nameEdit]);

  const nameEditToggle = () => {
    dispatch({ payload: { nameEdit: !nameEdit } });
  };

  const onChangewbName = (e: any) => {
    const { value } = e?.target;
    dispatch({ payload: { wbName: value || "Untitled" } });
  };

  const onWbRun = async () => {
    try {
      const req = {
        language: selectedLang,
        code: values[selectedLang],
        fileName: wbName,
        inputs: input.split("\n"),
      };
      const resp = await commonService.compileCode(req);
      if (resp?.status === "SUCCESS") {
        dispatch({ payload: { output: resp?.output?.split("\n") } });
        if (outRef?.current) {
          outRef?.current?.scrollIntoView();
        }
      } else throw resp;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  useEffect(() => {
    if (saved) {
      setTimeout(() => {
        dispatch({ payload: { saved: false } });
      }, 1000);
    }
  }, [saved]);

  const onSaveFile = async () => {
    try {
      const req = {
        wbId,
        javascript: values?.javascript,
        java: values?.java,
        python: values?.python,
        cpp: values?.cpp,
        go: values?.go,
        wbName,
      };
      const res = await wbService.updateWb(req);
      if (res?.status === "SUCCESS") {
        dispatch({ payload: { saved: true } });
      } else throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  return {
    wbName,
    wbAuthor,
    selectedLang,
    values,
    input,
    output,
    nameEdit,
    pageNameRef,
    outRef,
    saved,
    nameEditToggle,
    selectLang,
    setValue,
    setInput,
    onChangewbName,
    onWbRun,
    onSaveFile,
  };
};

export default useIndividualWb;
