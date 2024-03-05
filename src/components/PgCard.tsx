"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  PCAction,
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCExtraActions,
  PCName,
  PCPreviewImg,
  PCWrapper,
} from "./ProjectCard.styles";
import { ACTION_ACTIONS } from "@/constants/StaticImages";

const PGCard = ({
  id,
  name,
  author,
  thumbnail,
}: {
  id: string;
  name: string;
  author: string;
  thumbnail: string;
}) => {
  const router = useRouter();

  return (
    <PCWrapper key={id} onClick={() => router.push(`/playgrounds/${name}`)}>
      <PCPreviewImg width={1000} height={1000} src={thumbnail} alt="" />
      <PCName>{name}</PCName>
      <PCAuthorSpan>
        <PCAuthorTitle>Author : </PCAuthorTitle>
        <PCAuthorName>{author}</PCAuthorName>
        <PCExtraActions>
          <PCAction src={ACTION_ACTIONS.heartOutliine} alt="" />
          <PCAction src={ACTION_ACTIONS.comment} alt="" />
        </PCExtraActions>
      </PCAuthorSpan>
    </PCWrapper>
  );
};

export default PGCard;
