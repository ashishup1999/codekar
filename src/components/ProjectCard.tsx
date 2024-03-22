"use client";
import React from "react";
import {
  ActionDiv,
  ActionIcon,
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCInfo,
  PCLink,
  PCName,
  PCPreview,
  PCPreviewWrapper,
  PCWrapper2,
} from "./Card.styles";
import { GRADIENTS } from "@/constants/CommonConstants";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const ProjectCard = ({ projInfo }: { projInfo: any }) => {
  return (
    <PCWrapper2 bggrad={GRADIENTS.orange}>
      <PCInfo bggrad={GRADIENTS.lightOrange}>
        <PCLink href={`/projects/project/${projInfo?.id}`} />
        <PCName>{projInfo?.name}</PCName>
        <PCAuthorSpan>
          <PCAuthorTitle>by </PCAuthorTitle>
          <PCAuthorName>{projInfo?.author}</PCAuthorName>
        </PCAuthorSpan>
        <ActionDiv>
          <ActionIcon src={COMMON_IMAGES.deleteIcon} alt="" />
        </ActionDiv>
      </PCInfo>
      <PCPreviewWrapper>
        <PCLink href={`/projects/project/${projInfo?.id}`} />
        <PCPreview srcDoc={projInfo?.previewHtml} />
      </PCPreviewWrapper>
    </PCWrapper2>
  );
};

export default ProjectCard;
