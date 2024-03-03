import projectsJson from "@/mocks/projects.json";
const getProjects = async () => {
  return projectsJson;
};

const projectsAPIs: { [key: string]: Function } = {
  getProjects,
};

export default projectsAPIs;
