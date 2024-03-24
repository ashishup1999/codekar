import { PROJECT_FILES } from "@/constants/CommonConstants";
import projectService from "@/services/ProjectService";
import { defaultStateReducer, getPreview } from "@/utils/CommonUtils";
import { emmetHTML } from "emmet-monaco-es";
import { useEffect, useReducer, useRef } from "react";

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
    nameEdit,
  } = state;

  useEffect(() => {
    getProjectInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProjectInfo = async () => {
    try {
      const res: GetProjRespIntr = await projectService.getProjectById(
        projectId
      );
      if (res?.status != "SUCCESS") return;
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
    } catch (error) {}
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

  const handleEditorDidMount = (_: any, monaco: any) => {
    if (currFile === PROJECT_FILES.html.id) emmetHTML(monaco);
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
    } catch (error) {}
  };

  const onChangeFileName = (e: any) => {
    const { value } = e?.target;
    dispatch({ payload: { projectName: value || "Untitled" } });
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
    pageNameRef,
    nameEdit,
    selectFile,
    setValue,
    handleEditorDidMount,
    onSaveProject,
    nameEditToggle,
    onChangeFileName
  };
};

export default useIndividualProject;
