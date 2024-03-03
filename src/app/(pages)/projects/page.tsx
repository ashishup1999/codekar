"use client";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { ProjectsDiv, ProjectsWrapper } from "./page.styles";
import Plus from "@/components/Plus";
import { usePathname } from "next/navigation";
import { HEADER_TO_GRADIENT } from "@/constants/CommonConstants";
import useProjects from "@/hooks/useProjects";

const Projects = () => {
  const pathName = usePathname();
  const secName = pathName.split("/")[1];
  const { projects } = useProjects();
  
  return (
    <ProjectsWrapper>
      <Plus grad={HEADER_TO_GRADIENT[secName]} />
      <ProjectsDiv>
        {projects.map((obj) => (
          <ProjectCard key={obj?.id} {...obj} />
        ))}
      </ProjectsDiv>
    </ProjectsWrapper>
  );
};

export default Projects;
