import projectsAPIs from "@/mock_apis/projects";
import { useEffect, useState } from "react";

const usePg = () => {
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

  return { pgs: projects };
};

export default usePg;