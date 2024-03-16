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

const WbCard = ({ wbInfo }: { wbInfo: any }) => {
  return (
    <PCMiniWrapper key={wbInfo?.id}>
      <PCLink href={`/whiteboards/${wbInfo?.id}`} />
      {wbInfo?.previewHtml ? (
        <PCPreviewImg srcDoc={wbInfo?.previewHtml} />
      ) : (
        <PCDefaultImg src={COMMON_IMAGES.logo} alt="" />
      )}
      <PCName>{wbInfo?.name}</PCName>
      <PCAuthorSpan>
        <PCAuthorTitle>Author : </PCAuthorTitle>
        <PCAuthorName>{wbInfo?.author}</PCAuthorName>
      </PCAuthorSpan>
    </PCMiniWrapper>
  );
};

export default WbCard;
