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
  const confirmDelete = () => {
    const answer = prompt(
      `Are you sure you want to delete this project? If yes please type "${projInfo?.name}" to delete.`
    );
    if (answer === projInfo?.name && onDelete) {
      onDelete(projInfo?.id);
    }
  };
  return (
    <PCWrapper2 className="pc" bggrad={GRADIENTS.purple}>
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
              onClick={confirmDelete}
            />
          </ActionDiv>
        )}
      </PCInfo>
      <PCPreviewWrapper>
        <PCLink href={`/projects/project/${projInfo?.id}`} />
        <PCPreview srcDoc={projInfo?.previewHtml} sandbox="" />
      </PCPreviewWrapper>
    </PCWrapper2>
  );
};

export default ProjectCard;
