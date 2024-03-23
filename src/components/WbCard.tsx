"use client";
import React, { useContext } from "react";
import {
  ActionDiv,
  ActionIcon,
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCLink,
  PCLinkWrapper,
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
    <PCLinkWrapper>
      <PCLink href={`/whiteboards/whiteboard/${wbInfo?.id}`} />
      <PCMiniWrapper key={wbInfo?.id} bggrad={GRADIENTS.lightGreen}>
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
    </PCLinkWrapper>
  );
};

export default WbCard;
