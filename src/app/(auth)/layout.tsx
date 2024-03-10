"use client";
import { COLOR_CONSTANTS, COMMON_TEXTS } from "@/constants/CommonConstants";
import logo from "@/images/logo.svg";
import {
  AuthDiv,
  ContentDiv,
  CopyrigthtText,
  FooterDiv,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  HomeWrapper,
  LogoImg,
} from "../page.styles";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
          <HeaderTextSpan>
            <LogoImg src={logo} alt="" />
            <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
          </HeaderTextSpan>
        </HeaderDiv>
        <ContentDiv>
          <AuthDiv>{children}</AuthDiv>
        </ContentDiv>
        <FooterDiv>
          <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
        </FooterDiv>
      </HomeWrapper>
    </>
  );
};

export default AuthLayout;
