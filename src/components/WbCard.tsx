"use client";
import React, { useContext } from "react";
import {
  ActionDiv,
  ActionIcon,
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCLink,
  PCMiniWrapper,
  PCName,
} from "./Card.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { GRADIENTS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const WbCard = ({ wbInfo }: { wbInfo: any }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  return (
    <PCMiniWrapper key={wbInfo?.id} bggrad={GRADIENTS.lightGreen}>
      <PCLink href={`/whiteboards/whiteboard/${wbInfo?.id}`} />
      <div>
        <PCName>{wbInfo?.name}</PCName>
        <PCAuthorSpan>
          <PCAuthorTitle>Author : </PCAuthorTitle>
          <PCAuthorName>{wbInfo?.author}</PCAuthorName>
        </PCAuthorSpan>
      </div>
      {userName === wbInfo?.author && (
        <ActionDiv className="del">
          <ActionIcon src={COMMON_IMAGES.deleteIcon} alt="" />
        </ActionDiv>
      )}
    </PCMiniWrapper>
  );
};

export default WbCard;
