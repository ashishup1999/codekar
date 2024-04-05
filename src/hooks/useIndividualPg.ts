import {
  DEFAULT_PLAYGROUND,
  ERROR_MSGS,
  TEST_REGEX,
} from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import commonService from "@/services/CommonService";
import pgService from "@/services/PgService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer, useRef } from "react";

interface GetPgRespIntr {
  status: string;
  message: string;
  pgData: {
    userName: string;
    pgName: string;
    javascript: string;
    java: string;
    python: string;
    cpp: string;
    go: string;
  };
}

const initialState: {
  pgName: string;
  pgAuthor: string;
  selectedLang: string;
  values: any;
  input: string;
  output: Array<string>;
  nameEdit: boolean;
  saved: boolean;
  errTxt: boolean;
} = {
  pgName: "",
  pgAuthor: "",
  selectedLang: DEFAULT_PLAYGROUND,
  values: {},
  input: "",
  output: [],
  nameEdit: false,
  saved: false,
  errTxt: false,
};

const useIndividualPg = ({ pgId }: { pgId: string }) => {
  const pageNameRef: any = useRef(null);
  const outRef: any = useRef(null);
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const {
    pgName,
    pgAuthor,
    selectedLang,
    values,
    input,
    output,
    nameEdit,
    saved,
    errTxt,
  } = state;
  const { setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    getPgInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPgInfo = async () => {
    try {
      const res: GetPgRespIntr = await pgService.getPgById(pgId);
      if (res?.status != "SUCCESS") throw res;
      const { pgData } = res;
      const payload = {
        pgName: pgData?.pgName,
        pgAuthor: pgData?.userName,
        values: {
          javascript: pgData?.javascript,
          java: pgData?.java,
          python: pgData?.python,
          cpp: pgData?.cpp,
          go: pgData?.go,
        },
      };
      dispatch({ payload });
    } catch (error: any) {
      if (error?.message === ERROR_MSGS.PG_DOES_NOT_EXISTS) {
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

  const onChangePgName = (e: any) => {
    const { value } = e?.target;
    dispatch({
      payload: {
        pgName: value,
        errTxt: !TEST_REGEX.alphaNumeric.test(value),
      },
    });
  };

  const onPgRun = async () => {
    try {
      const req = {
        language: selectedLang,
        code: values[selectedLang],
        fileName: pgName,
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
        pgId,
        javascript: values?.javascript,
        java: values?.java,
        python: values?.python,
        cpp: values?.cpp,
        go: values?.go,
        pgName,
      };
      const res = await pgService.updatePg(req);
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
    pgName,
    pgAuthor,
    selectedLang,
    values,
    input,
    output,
    nameEdit,
    pageNameRef,
    outRef,
    saved,
    errTxt,
    nameEditToggle,
    selectLang,
    setValue,
    setInput,
    onChangePgName,
    onPgRun,
    onSaveFile,
  };
};

export default useIndividualPg;
