import {
  ERROR_MSGS,
  PROJECT_FILES,
  TEST_REGEX,
} from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import projectService from "@/services/ProjectService";
import {
  defaultStateReducer,
  getDebounceFn,
  getPreview,
  isObjEmpty,
} from "@/utils/CommonUtils";
import { useCallback, useContext, useEffect, useReducer, useRef } from "react";

interface GetProjRespIntr {
  status: string;
  message: string;
  projectData: {
    projectName: string;
    userName: string;
    html: string;
    css: string;
    javascript: string;
  };
}

type IntialStateType = {
  projectName: string;
  projectAuthor: string;
  currFile: string;
  values:
    | {
        html: string;
        css: string;
        javascript: string;
      }
    | {};
  preview: any;
  saved: boolean;
  errTxt: boolean;
  nameEdit: boolean;
};

const initialState: IntialStateType = {
  projectName: "",
  projectAuthor: "",
  currFile: PROJECT_FILES.html.id,
  values: {},
  preview: null,
  saved: false,
  errTxt: false,
  nameEdit: false,
};

const useIndividualProject = ({ projectId }: { projectId: string }) => {
  const pageNameRef: any = useRef(null);
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const {
    projectName,
    projectAuthor,
    currFile,
    values,
    preview,
    saved,
    errTxt,
    nameEdit,
  } = state;
  const { setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    getProjectInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isObjEmpty(values)) {
      saveProject();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    if (saved) {
      setTimeout(() => {
        dispatch({ payload: { saved: false } });
      }, 1000);
    }
  }, [saved]);

  useEffect(() => {
    if (nameEdit && pageNameRef?.current) {
      pageNameRef.current.focus();
    }
  }, [nameEdit]);

  const getProjectInfo = async () => {
    try {
      const res: GetProjRespIntr = await projectService.getProjectById(
        projectId
      );
      if (res?.status != "SUCCESS") throw res;
      const { projectData } = res;
      const payload: any = {
        projectName: projectData?.projectName,
        projectAuthor: projectData?.userName,
        values: {
          html: projectData?.html,
          css: projectData?.css,
          javascript: projectData?.javascript,
        },
      };
      payload.preview = getPreview(payload.values);
      dispatch({ payload });
    } catch (error: any) {
      if (error?.message === ERROR_MSGS.PROJECT_DOES_NOT_EXISTS) {
        setBasicDetails({ payload: { errorMsg: error?.message } });
      } else {
        setBasicDetails({
          payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
        });
      }
    }
  };

  const selectFile = (val: string) => {
    dispatch({ payload: { currFile: val } });
  };

  const setValue = (key: string, val: string) => {
    const newValues = { ...values, [key]: val };
    const previewData = getPreview(newValues);
    dispatch({ payload: { values: newValues, preview: previewData } });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = useCallback(getDebounceFn(setValue, 1500), [
    values,
  ]);

  const saveProject = async () => {
    try {
      const req = {
        projectId: projectId,
        html: values.html,
        javascript: values.javascript,
        css: values.css,
        projectName: projectName,
      };
      const res = await projectService.updateProject(req);
      if (res?.status === "SUCCESS") {
        dispatch({ payload: { saved: true } });
      } else throw res;
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const onChangeFileName = (e: any) => {
    const { value } = e?.target;
    dispatch({
      payload: {
        projectName: value,
        errTxt: !TEST_REGEX.alphaNumeric.test(value),
      },
    });
  };

  const nameEditToggle = () => {
    dispatch({ payload: { nameEdit: !nameEdit } });
  };

  return {
    currFile,
    values,
    preview,
    projectName,
    projectAuthor,
    saved,
    errTxt,
    pageNameRef,
    nameEdit,
    selectFile,
    setValue: debouncedSetValue,
    onSaveProject: saveProject,
    nameEditToggle,
    onChangeFileName,
  };
};

export default useIndividualProject;
