"use client";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { ProjectsDiv, ProjectsWrapper } from "./page.styles";
import Plus from "@/components/Plus";
import { usePathname } from "next/navigation";
import { HEADER_TO_GRADIENT } from "@/constants/CommonConstants";

const Projects = () => {
  const pathName = usePathname();
  const secName = pathName.split("/")[1];

  return (
    <ProjectsWrapper>
      <Plus grad={HEADER_TO_GRADIENT[secName]} />
      <ProjectsDiv>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsDiv>
    </ProjectsWrapper>
  );
};

export default Projects;
