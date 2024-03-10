"use client";
import { COLOR_CONSTANTS, COMMON_TEXTS } from "@/constants/CommonConstants";
import {
  AuthDiv,
  ContentDiv,
  CopyrigthtText,
  FooterDiv,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  HomeWrapper,
} from "../page.styles";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
          <HeaderTextSpan>
            <HeaderText color={COLOR_CONSTANTS.red}>
              {COMMON_TEXTS.appName1}
            </HeaderText>
            <HeaderText color={COLOR_CONSTANTS.purple}>
              {COMMON_TEXTS.appName2}
            </HeaderText>
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
