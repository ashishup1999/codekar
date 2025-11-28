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

  const confirmDelete = () => {
    const answer = prompt(
      `Are you sure you want to delete this whiteboard? If yes please type "${wbInfo?.name}" to delete.`
    );
    if (answer === wbInfo?.name && onDelete) {
      onDelete(wbInfo?.id);
    }
  };
  return (
    <PCMiniWrapper key={wbInfo?.id} bggrad={GRADIENTS.lightGreen}>
      <PCLinkWrapper
        onClick={() => router.push(`/whiteboards/whiteboard/${wbInfo?.id}`)}
      >
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
            onClick={confirmDelete}
          />
        </ActionDiv>
      )}
    </PCMiniWrapper>
  );
};

export default WbCard;
