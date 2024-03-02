"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  PCAction,
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCExtraActions,
  PCName,
  PCPreviewImg,
  PCWrapper,
} from "./ProjectCard.styles";
import { ACTION_ACTIONS, OPTION_ICONS } from "@/constants/StaticImages";

const ProjectCard = () => {
  return (
    <PCWrapper>
      <PCPreviewImg src={''} alt="" />
      <PCName>Project Name</PCName>
      <PCAuthorSpan>
        <PCAuthorTitle>Author : </PCAuthorTitle>
        <PCAuthorName>Ashish Upadhyay</PCAuthorName>
        <PCExtraActions>
          <PCAction src={ACTION_ACTIONS.heartOutliine} alt="" />
          <PCAction src={ACTION_ACTIONS.comment} alt="" />
        </PCExtraActions>
      </PCAuthorSpan>
    </PCWrapper>
  );
};

export default ProjectCard;
