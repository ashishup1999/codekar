"use client";
import React, { useContext } from "react";
import {
  ActionDiv,
  ActionIcon,
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCLinkWrapper,
  PCMiniWrapper,
  PCName,
} from "./Card.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { GRADIENTS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useRouter } from "next/navigation";

const WbCard = ({ wbInfo, onDelete }: { wbInfo: any; onDelete?: Function }) => {
  const router = useRouter();
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  return (
    <PCMiniWrapper key={wbInfo?.id} bggrad={GRADIENTS.lightGreen}>
      <PCLinkWrapper onClick={() => router.push(`/whiteboards/whiteboard/${wbInfo?.id}`)}>
        <PCName>{wbInfo?.name}</PCName>
        <PCAuthorSpan>
          <PCAuthorTitle>Author : </PCAuthorTitle>
          <PCAuthorName>{wbInfo?.author}</PCAuthorName>
        </PCAuthorSpan>
      </PCLinkWrapper>
      {userName === wbInfo?.author && onDelete && (
        <ActionDiv className="del">
          <ActionIcon
            src={COMMON_IMAGES.deleteIcon}
            alt=""
            onClick={() => onDelete(wbInfo?.id)}
          />
        </ActionDiv>
      )}
    </PCMiniWrapper>
  );
};

export default WbCard;
