"use client";
import React from "react";
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

const WbCard = ({ wbInfo }: { wbInfo: any }) => {
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
      <ActionDiv className="del">
        <ActionIcon src={COMMON_IMAGES.deleteIcon} alt="" />
      </ActionDiv>
    </PCMiniWrapper>
  );
};

export default WbCard;
