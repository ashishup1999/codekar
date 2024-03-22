"use client";
import React from "react";
import {
  ContentDiv,
  CopyrigthtText,
  FooterDiv,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  HomeWrapper,
  LogoImg,
  UserImg,
} from "@/app/page.styles";
import { COMMON_TEXTS, HOME_OPTIONS } from "@/constants/CommonConstants";
import OptionCards from "@/components/OptionCards";
import userCircle from "@/images/userCircle.svg";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const lsUserName = localStorage.getItem("userName");
  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
          <HeaderTextSpan>
            <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
            <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
          </HeaderTextSpan>
          <UserImg
            src={userCircle}
            alt=""
            onClick={() => router.push(`/profile/${lsUserName}`)}
          />
        </HeaderDiv>
        <ContentDiv>
          {HOME_OPTIONS.map((obj) => {
            return (
              <OptionCards
                key={obj?.buttonTitle}
                {...obj}
                toRoute={obj?.userDep? `${obj?.toRoute}/${lsUserName}`:obj?.toRoute}
              />
            );
          })}
        </ContentDiv>
        <FooterDiv>
          <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
        </FooterDiv>
      </HomeWrapper>
    </>
  );
};

export default Home;
