"use client";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { ProjectsDiv, ProjectsWrapper } from "./page.styles";
import Plus from "@/components/Plus";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import useProjects from "@/hooks/useProjects";

const Projects = () => {
  const {
    createFileName,
    isCreateModalOpen,
    projects,
    onFileNameChange,
    onCreateNewClick,
    onCreateFile,
  } = useProjects();

  return (
    <>
      <ProjectsWrapper>
        <Plus
          themeColor={COLORS.orange}
          grad={GRADIENTS.orange}
          isModalOpen={isCreateModalOpen}
          fileName={createFileName}
          modalTitle="Project name"
          onCreateNew={onCreateNewClick}
          onCreateFile={onCreateFile}
          onFileNameChange={onFileNameChange}
        />
        <ProjectsDiv>
          {projects.map((obj: any) => (
            <ProjectCard key={obj?.id} projInfo={obj} />
          ))}
        </ProjectsDiv>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
