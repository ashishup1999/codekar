"use client";
import React from "react";
import {
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCDefaultImg,
  PCLink,
  PCMiniWrapper,
  PCName,
  PCPreviewImg,
} from "./ProjectCard.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const PgCard = ({ pgInfo }: { pgInfo: any }) => {
  return (
    <PCMiniWrapper key={pgInfo?.id}>
      <PCLink href={`/playgrounds/${pgInfo?.id}`} />
      {pgInfo?.previewHtml ? (
        <PCPreviewImg srcDoc={pgInfo?.previewHtml} />
      ) : (
        <PCDefaultImg src={COMMON_IMAGES.logo} alt="" />
      )}
      <PCName>{pgInfo?.name}</PCName>
      <PCAuthorSpan>
        <PCAuthorTitle>Author : </PCAuthorTitle>
        <PCAuthorName>{pgInfo?.author}</PCAuthorName>
      </PCAuthorSpan>
    </PCMiniWrapper>
  );
};

export default PgCard;
