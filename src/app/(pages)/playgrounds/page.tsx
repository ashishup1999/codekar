"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  COLORS,
  HEADER_TO_BORDER_CLR,
  HEADER_TO_GRADIENT,
  LINEAR_GRADS,
} from "@/constants/CommonConstants";
import usePg from "@/hooks/usePg";
import { PgDiv, PgWrapper } from "./page.styles";
import PGCard from "@/components/PgCard";
import {
  HeaderDiv,
  HeaderText,
  HeaderTextWrapper,
  LogoImg,
  UserImg,
} from "../layout.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import Plus from "@/components/Plus";

const Playgrounds = () => {
  const router = useRouter();
  const {
    pgs,
    pgName,
    isCreateModalOpen,
    onCreateFile,
    onCreateNewClick,
    onFileNameChange,
  } = usePg();

  return (
    <>
      <HeaderDiv>
        <LogoImg
          src={COMMON_IMAGES.logo}
          alt=""
          onClick={() => router.push("/")}
        />
        <HeaderTextWrapper
          bgColorGrad={LINEAR_GRADS.blue}
          borderclr={HEADER_TO_BORDER_CLR.playgrounds}
        >
          <HeaderText>Playgrounds</HeaderText>
        </HeaderTextWrapper>
        <UserImg src={COMMON_IMAGES.userCircle} alt="" />
      </HeaderDiv>
      <PgWrapper>
        <Plus
          themeColor={COLORS.blue}
          grad={HEADER_TO_GRADIENT.playgrounds}
          isModalOpen={isCreateModalOpen}
          fileName={pgName}
          modalTitle="Playground Name"
          onCreateNew={onCreateNewClick}
          onCreateFile={onCreateFile}
          onFileNameChange={onFileNameChange}
        />
        <PgDiv>
          {pgs.map((obj: any) => (
            <PGCard key={obj?.id} pgInfo={obj} />
          ))}
        </PgDiv>
      </PgWrapper>
    </>
  );
};

export default Playgrounds;
