"use client";
import ProjectCard from "@/components/ProjectCard";
import React, { useContext } from "react";
import { ProjectsDiv, ProjectsWrapper } from "./page.styles";
import Plus from "@/components/Plus";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import useProjects from "@/hooks/useProjects";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { ErrorContentDiv, ErrorIcon, ErrorText } from "@/app/page.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const Projects = ({ params }: { params: { userName: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const {
    createFileName,
    isCreateModalOpen,
    projects,
    onFileNameChange,
    createNewToggle,
    onCreateFile,
    deleteProject,
  } = useProjects({ userName: params.userName });

  return (
    <>
      <ProjectsWrapper>
        {basicDetails.userName === params.userName && (
          <Plus
            themeColor={COLORS.purple}
            grad={GRADIENTS.purple}
            isModalOpen={isCreateModalOpen}
            fileName={createFileName}
            modalTitle="Project name"
            createNewToggle={createNewToggle}
            onCreateFile={onCreateFile}
            onFileNameChange={onFileNameChange}
          />
        )}
        <ProjectsDiv align={!Boolean(projects?.length)}>
          {projects?.length ? (
            projects.map((obj: any) => (
              <ProjectCard
                key={obj?.id}
                projInfo={obj}
                onDelete={deleteProject}
              />
            ))
          ) : (
            <ErrorContentDiv>
              <ErrorIcon src={COMMON_IMAGES.notFound} alt="" />
              <ErrorText>No Projects Found</ErrorText>
            </ErrorContentDiv>
          )}
        </ProjectsDiv>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
