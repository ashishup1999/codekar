import projectService from "@/services/ProjectService";
import { defaultStateReducer } from "@/utils/CommonUtils";
import { useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const initialState: {
  createFileName: string;
  projects: Array<any>;
  isCreateModalOpen: boolean;
} = {
  createFileName: "",
  projects: [],
  isCreateModalOpen: false,
};

const useProjects = () => {
  const router = useRouter();
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { createFileName, isCreateModalOpen, projects } = state;

  useEffect(() => {
    if (userName) getAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  const getAllProjects = async () => {
    try {
      const res = await projectService.getAllProjectsByUser(userName);
      if (res?.status === "SUCCESS") {
        let allProjs: Array<any> = [];
        for (let i = 0; i < res?.projects.length; i++) {
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
    } catch (error) {}
  };

  const onCreateNewClick = () => {
    dispatch({ payload: { isCreateModalOpen: true } });
  };

  const onCreateFile = async () => {
    try {
      const req = {
        userName: basicDetails?.userName,
        projectName: createFileName,
      };
      const res = await projectService.createNewProject(req);
      if (res?.status !== "SUCCESS") throw res;
      dispatch({ payload: { isCreateModalOpen: false } });
      router.push(`/projects/${res?.projectId}`);
    } catch (error) {}
  };

  const onFileNameChange = (e: any) => {
    const val = e.target.value;
    dispatch({ payload: { createFileName: val } });
  };

  return {
    createFileName,
    isCreateModalOpen,
    projects,
    onFileNameChange,
    onCreateNewClick,
    onCreateFile,
  };
};

export default useProjects;
