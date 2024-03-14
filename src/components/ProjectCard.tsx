"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  PCAuthorName,
  PCAuthorSpan,
  PCAuthorTitle,
  PCName,
  PCPreviewImg,
  PCWrapper,
} from "./ProjectCard.styles";

const ProjectCard = ({ projInfo }: { projInfo: any }) => {
  const router = useRouter();

  return (
    <PCWrapper
      key={projInfo?.id}
      onClick={() => router.push(`/projects/${projInfo?.id}`)}
    >
      <PCPreviewImg
        width={1000}
        height={1000}
        src={projInfo?.thumbnail}
        alt=""
      />
      <PCName>{projInfo?.name}</PCName>
      <PCAuthorSpan>
        <PCAuthorTitle>Author : </PCAuthorTitle>
        <PCAuthorName>{projInfo?.author}</PCAuthorName>
        {/* <PCExtraActions>
          <PCAction src={ACTION_ACTIONS.heartOutliine} alt="" />
          <PCAction src={ACTION_ACTIONS.comment} alt="" />
        </PCExtraActions> */}
      </PCAuthorSpan>
    </PCWrapper>
  );
};

export default ProjectCard;
