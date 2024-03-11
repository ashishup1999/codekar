"use client";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { ProjectsDiv, ProjectsWrapper } from "./page.styles";
import Plus from "@/components/Plus";
import { usePathname } from "next/navigation";
import { COLORS, HEADER_TO_GRADIENT } from "@/constants/CommonConstants";
import useProjects from "@/hooks/useProjects";

const Projects = () => {
  const pathName = usePathname();
  const secName = pathName.split("/")[1];
  const {
    createFileName,
    isCreateModalOpen,
    projects,
    onFileNameChange,
    onCreateNewClick,
    onCreateFile,
  } = useProjects();

  return (
    <ProjectsWrapper>
      <Plus
        themeColor={COLORS.orange}
        grad={HEADER_TO_GRADIENT[secName]}
        isModalOpen={isCreateModalOpen}
        fileName={createFileName}
        modalTitle="Project name"
        onCreateNew={onCreateNewClick}
        onCreateProject={onCreateFile}
        onFileNameChange={onFileNameChange}
      />
      <ProjectsDiv>
        {projects.map((obj: any) => (
          <ProjectCard key={obj?.id} {...obj} />
        ))}
      </ProjectsDiv>
    </ProjectsWrapper>
  );
};

export default Projects;
