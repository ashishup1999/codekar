"use client";
import React from "react";
import {
  ContentDiv,
  CopyrigthtText,
  FooterDiv,
  GlobalStyle,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  HomeWrapper,
  LogoImg,
  UserImg,
} from "@/app/page.styles";
import {
  COLOR_CONSTANTS,
  COMMON_TEXTS,
  HOME_OPTIONS,
} from "@/constants/CommonConstants";
import OptionCards from "@/components/OptionCards";
import logo from "@/images/logo.svg";
import userCircle from "@/images/userCircle.svg";

const Home = () => {
  return (
    <>
      <GlobalStyle/>
      <HomeWrapper>
        <HeaderDiv>
          <LogoImg src={logo} alt="" />
          <HeaderTextSpan>
            <HeaderText color={COLOR_CONSTANTS.red}>
              {COMMON_TEXTS.appName1}
            </HeaderText>
            <HeaderText color={COLOR_CONSTANTS.purple}>
              {COMMON_TEXTS.appName2}
            </HeaderText>
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
