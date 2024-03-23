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

const PgCard = ({ pgInfo }: { pgInfo: any }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  return (
    <PCLinkWrapper>
      <PCLink href={`/playgrounds/pg/${pgInfo?.id}`} />
      <PCMiniWrapper key={pgInfo?.id} bggrad={GRADIENTS.lightBlue}>
        <div>
          <PCName>{pgInfo?.name}</PCName>
          <PCAuthorSpan>
            <PCAuthorTitle>Author : </PCAuthorTitle>
            <PCAuthorName>{pgInfo?.author}</PCAuthorName>
          </PCAuthorSpan>
        </div>
        {userName === pgInfo?.author && (
          <ActionDiv className="del">
            <ActionIcon src={COMMON_IMAGES.deleteIcon} alt="" />
          </ActionDiv>
        )}
      </PCMiniWrapper>
    </PCLinkWrapper>
  );
};

export default PgCard;
