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

const PgCard = ({ pgInfo }: { pgInfo: any }) => {
  return (
    <PCMiniWrapper key={pgInfo?.id} bggrad={GRADIENTS.lightBlue}>
      <PCLink href={`/playgrounds/pg/${pgInfo?.id}`} />
      <div>
        <PCName>{pgInfo?.name}</PCName>
        <PCAuthorSpan>
          <PCAuthorTitle>Author : </PCAuthorTitle>
          <PCAuthorName>{pgInfo?.author}</PCAuthorName>
        </PCAuthorSpan>
      </div>
      <ActionDiv className="del">
        <ActionIcon src={COMMON_IMAGES.deleteIcon} alt="" />
      </ActionDiv>
    </PCMiniWrapper>
  );
};

export default PgCard;
