"use client";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { ProjectsDiv, ProjectsWrapper } from "./page.styles";
import Plus from "@/components/Plus";
import { usePathname, useRouter } from "next/navigation";
import {
  COLORS,
  HEADER_TO_BORDER_CLR,
  HEADER_TO_GRADIENT,
  LINEAR_GRADS,
} from "@/constants/CommonConstants";
import useProjects from "@/hooks/useProjects";
import {
  HeaderDiv,
  HeaderText,
  HeaderTextWrapper,
  LogoImg,
  UserImg,
} from "../layout.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const Projects = () => {
  const router = useRouter();
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
    <>
      <HeaderDiv>
        <LogoImg
          src={COMMON_IMAGES.logo}
          alt=""
          onClick={() => router.push("/")}
        />
        <HeaderTextWrapper
          bgColorGrad={LINEAR_GRADS.orange}
          borderclr={HEADER_TO_BORDER_CLR.projects}
        >
          <HeaderText>Projects</HeaderText>
        </HeaderTextWrapper>
        <UserImg src={COMMON_IMAGES.userCircle} alt="" />
      </HeaderDiv>
      <ProjectsWrapper>
        <Plus
          themeColor={COLORS.orange}
          grad={HEADER_TO_GRADIENT[secName]}
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
