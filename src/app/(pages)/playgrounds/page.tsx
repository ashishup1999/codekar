"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  HEADER_TO_BORDER_CLR,
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

const Playgrounds = () => {
  const router = useRouter();
  const { pgs } = usePg();

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
        <PgDiv>
          {pgs.map((obj) => (
            <PGCard key={obj?.id} {...obj} />
          ))}
        </PgDiv>
      </PgWrapper>
    </>
  );
};

export default Playgrounds;
