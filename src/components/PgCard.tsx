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
        <ActionDiv className="del" onClick={() => onDelete(pgInfo?.id)}>
          <ActionIcon src={COMMON_IMAGES.deleteIcon} alt="" />
        </ActionDiv>
      )}
    </PCMiniWrapper>
  );
};

export default PgCard;
