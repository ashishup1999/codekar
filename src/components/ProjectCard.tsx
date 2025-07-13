"use client";
import React, { useContext } from "react";
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
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const ProjectCard = ({
  projInfo,
  onDelete,
}: {
  projInfo: any;
  onDelete?: Function;
}) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  return (
    <PCWrapper2 bggrad={GRADIENTS.purple}>
      <PCInfo bggrad={GRADIENTS.lightPurple}>
        <PCName>{projInfo?.name}</PCName>
        <PCAuthorSpan>
          <PCAuthorTitle>by </PCAuthorTitle>
          <PCAuthorName>{projInfo?.author}</PCAuthorName>
        </PCAuthorSpan>
        {userName === projInfo?.author && onDelete && (
          <ActionDiv>
            <ActionIcon
              src={COMMON_IMAGES.deleteIcon}
              alt=""
              onClick={() => onDelete(projInfo?.id)}
            />
          </ActionDiv>
        )}
      </PCInfo>
      <PCPreviewWrapper>
        <PCLink href={`/projects/project/${projInfo?.id}`} />
        <PCPreview srcDoc={projInfo?.previewHtml} />
      </PCPreviewWrapper>
    </PCWrapper2>
  );
};

export default ProjectCard;
