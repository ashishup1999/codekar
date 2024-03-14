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
import {
  COMMON_TEXTS,
  HOME_OPTIONS,
} from "@/constants/CommonConstants";
import OptionCards from "@/components/OptionCards";
import logo from "@/images/logo.svg";
import userCircle from "@/images/userCircle.svg";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
          <HeaderTextSpan>
            <LogoImg src={logo} alt="" />
            <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
          </HeaderTextSpan>
          <UserImg src={userCircle} alt="" />
        </HeaderDiv>
        <ContentDiv>
          {HOME_OPTIONS.map((obj) => {
            return <OptionCards key={obj?.buttonTitle} {...obj} />;
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
