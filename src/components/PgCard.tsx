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

const PgCard = ({ pgInfo, onDelete }: { pgInfo: any; onDelete?: Function }) => {
  const router = useRouter();
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;

  const confirmDelete = () => {
    const answer = prompt(
      `Are you sure you want to delete this playground? If yes please type "${pgInfo?.name}" to delete.`
    );
    if (answer === pgInfo?.name && onDelete) {
      onDelete(pgInfo?.id);
    }
  };
  return (
    <PCMiniWrapper key={pgInfo?.id} bggrad={GRADIENTS.lightBlue}>
      <PCLinkWrapper
        onClick={() => router.push(`/playgrounds/pg/${pgInfo?.id}`)}
      >
        <PCName>{pgInfo?.name}</PCName>
        <PCAuthorSpan>
          <PCAuthorTitle>Author : </PCAuthorTitle>
          <PCAuthorName>{pgInfo?.author}</PCAuthorName>
        </PCAuthorSpan>
      </PCLinkWrapper>
      {userName === pgInfo?.author && onDelete && (
        <ActionDiv className="del" onClick={confirmDelete}>
          <ActionIcon src={COMMON_IMAGES.deleteIcon} alt="" />
        </ActionDiv>
      )}
    </PCMiniWrapper>
  );
};

export default PgCard;
