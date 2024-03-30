import projectService from "@/services/ProjectService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { ERROR_MSGS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const initialState: {
  createFileName: string;
  projects: Array<any>;
  isCreateModalOpen: boolean;
  compKey: boolean;
} = {
  createFileName: "",
  projects: [],
  isCreateModalOpen: false,
  compKey: true,
};

const useProjects = ({ userName }: { userName: string }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { createFileName, isCreateModalOpen, projects, compKey } = state;
  const { setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    if (userName) getAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, compKey]);

  const getAllProjects = async () => {
    try {
      const res = await projectService.getAllProjectsByUser(userName);
      if (res?.status === "SUCCESS") {
        let allProjs: Array<any> = [];
        for (let i = 0; i < res?.projects?.length; i++) {
          const proj = res?.projects[i];
          const tp: any = {
            id: proj.projectId,
            author: proj.userName,
            name: proj.projectName,
            previewHtml: proj.previewHtml,
          };
          allProjs.push(tp);
        }
        dispatch({ payload: { projects: allProjs } });
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

  const onCreateNewClick = () => {
    dispatch({ payload: { isCreateModalOpen: true } });
  };

  const onCreateFile = async () => {
    try {
      const req = {
        userName,
        projectName: createFileName,
      };
      const res = await projectService.createNewProject(req);
      if (res?.status !== "SUCCESS") throw res;
      dispatch({ payload: { isCreateModalOpen: false } });
      router.push(`/projects/project/${res?.projectId}`);
    } catch (error) {}
  };

  const onFileNameChange = (e: any) => {
    const val = e.target.value;
    dispatch({ payload: { createFileName: val } });
  };

  const deleteProject = async (id: string) => {
    try {
      const res = await projectService.deleteProject(id);
      if (res?.status !== "SUCCESS") throw res;
      dispatch({ payload: { compKey: !compKey } });
    } catch (error) {}
  };

  return {
    createFileName,
    isCreateModalOpen,
    projects,
    onFileNameChange,
    onCreateNewClick,
    onCreateFile,
    deleteProject,
  };
};

export default useProjects;
