"use client";
import React from "react";
import {
  CopyrigthtText,
  ErrorContentDiv,
  ErrorIcon,
  ErrorText,
  FooterDiv,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  HomeWrapper,
  LogoImg,
} from "@/app/page.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { COMMON_TEXTS, FULL_PAGE_ERRORS } from "@/constants/CommonConstants";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <HomeWrapper plainBg>
      <HeaderDiv>
        <HeaderTextSpan onClick={() => router.push(`/`)}>
          <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
          <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
        </HeaderTextSpan>
      </HeaderDiv>
      <ErrorContentDiv>
        <ErrorIcon src={FULL_PAGE_ERRORS.USER_DOES_NOT_EXISTS.icon} alt="" />
        <ErrorText>{FULL_PAGE_ERRORS.USER_DOES_NOT_EXISTS.text}</ErrorText>
      </ErrorContentDiv>
      <FooterDiv>
        <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
      </FooterDiv>
    </HomeWrapper>
  );
};

export default NotFound;
