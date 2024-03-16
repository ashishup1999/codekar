"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  COLORS,
  HEADER_TO_BORDER_CLR,
  HEADER_TO_GRADIENT,
  LINEAR_GRADS,
} from "@/constants/CommonConstants";
import { WbDiv, WbWrapper } from "./page.styles";
import WbCard from "@/components/WbCard";
import {
  HeaderDiv,
  HeaderText,
  HeaderTextWrapper,
  LogoImg,
  UserImg,
} from "../layout.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import Plus from "@/components/Plus";
import useWb from "@/hooks/useWb";

const WhiteBoards = () => {
  const router = useRouter();
  const {
    wbs,
    wbName,
    isCreateModalOpen,
    onCreateFile,
    onCreateNewClick,
    onFileNameChange,
  } = useWb();

  return (
    <>
      <HeaderDiv>
        <LogoImg
          src={COMMON_IMAGES.logo}
          alt=""
          onClick={() => router.push("/")}
        />
        <HeaderTextWrapper
          bgColorGrad={LINEAR_GRADS.green}
          borderclr={HEADER_TO_BORDER_CLR.whiteboards}
        >
          <HeaderText>White Boards</HeaderText>
        </HeaderTextWrapper>
        <UserImg src={COMMON_IMAGES.userCircle} alt="" />
      </HeaderDiv>
      <WbWrapper>
        <Plus
          themeColor={COLORS.green}
          grad={HEADER_TO_GRADIENT.whiteboards}
          isModalOpen={isCreateModalOpen}
          fileName={wbName}
          modalTitle="Whiteboard Name"
          onCreateNew={onCreateNewClick}
          onCreateFile={onCreateFile}
          onFileNameChange={onFileNameChange}
        />
        <WbDiv>
          {wbs.map((obj: any) => (
            <WbCard key={obj?.id} wbInfo={obj} />
          ))}
        </WbDiv>
      </WbWrapper>
    </>
  );
};

export default WhiteBoards;
