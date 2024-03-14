"use client";
import React from "react";
import {
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCLink,
  PCName,
  PCPreviewImg,
  PCWrapper,
} from "./ProjectCard.styles";

const ProjectCard = ({ projInfo }: { projInfo: any }) => {

  return (
    <PCWrapper key={projInfo?.id}>
      <PCLink href={`/projects/${projInfo?.id}`} />
      <PCPreviewImg srcDoc={projInfo?.previewHtml} />
      <PCName>{projInfo?.name}</PCName>
      <PCAuthorSpan>
        <PCAuthorTitle>Author : </PCAuthorTitle>
        <PCAuthorName>{projInfo?.author}</PCAuthorName>
      </PCAuthorSpan>
    </PCWrapper>
  );
};

export default ProjectCard;
