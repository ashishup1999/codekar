import { useEffect, useState } from "react";

const usePg = () => {
  const [projects]: [projects: Array<any>, setProjects: Function] = useState(
    []
  );

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {};

  return { pgs: projects };
};

export default usePg;
