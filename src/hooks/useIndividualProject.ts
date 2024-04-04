import {
  ERROR_MSGS,
  PROJECT_FILES,
  TEST_REGEX,
} from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import projectService from "@/services/ProjectService";
import { defaultStateReducer, getPreview } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer, useRef } from "react";

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

const initialState: {
  projectName: string;
  projectAuthor: string;
  currFile: string;
  values: {
    html: string;
    css: string;
    javascript: string;
  };
  preview: any;
  saved: boolean;
  errTxt: boolean;
  nameEdit: boolean;
} = {
  projectName: "",
  projectAuthor: "",
  currFile: PROJECT_FILES.html.id,
  values: {
    html: "",
    css: "",
    javascript: "",
  },
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
    updatePreview,
    saved,
    errTxt,
    nameEdit,
  } = state;
  const { setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    getProjectInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProjectInfo = async () => {
    try {
      const res: GetProjRespIntr = await projectService.getProjectById(
        projectId
      );
      if (res?.status != "SUCCESS") throw res;
      const { projectData } = res;
      const payload = {
        projectName: projectData?.projectName,
        projectAuthor: projectData?.userName,
        values: {
          html: projectData?.html,
          css: projectData?.css,
          javascript: projectData?.javascript,
        },
      };
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

  useEffect(() => {
    getHtmlPreviewAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, updatePreview]);

  const selectFile = (val: string) => {
    dispatch({ payload: { currFile: val } });
  };

  const setValue = (key: string, val: string) => {
    dispatch({ payload: { values: { ...values, [key]: val } } });
  };

  const getHtmlPreviewAPI = () => {
    const data = getPreview(values);
    dispatch({ payload: { preview: data } });
  };

  useEffect(() => {
    if (saved) {
      setTimeout(() => {
        dispatch({ payload: { saved: false } });
      }, 1000);
    }
  }, [saved]);

  const onSaveProject = async () => {
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
        projectName: value || "Untitled",
        errTxt: !TEST_REGEX.alphaNumeric.test(value),
      },
    });
  };

  useEffect(() => {
    if (nameEdit && pageNameRef?.current) {
      pageNameRef.current.focus();
    }
  }, [nameEdit]);

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
    setValue,
    onSaveProject,
    nameEditToggle,
    onChangeFileName,
  };
};

export default useIndividualProject;
