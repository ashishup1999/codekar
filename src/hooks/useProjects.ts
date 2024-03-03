import projectsAPIs from "@/apis/projects";
import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects]: [projects: Array<any>, setProjects: Function] =
    useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    try {
      const res = await projectsAPIs.getProjects();
      setProjects(res);
    } catch (error) {
      debugger;
    }
  };

  return { projects };
};

export default useProjects;
