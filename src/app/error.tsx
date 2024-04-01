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
import { COMMON_TEXTS } from "@/constants/CommonConstants";
import { useRouter } from "next/navigation";

export default function ErrorBoundary({ error }: { error: any }) {
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
        <ErrorIcon src={error?.icon} alt="" />
        <ErrorText>{error?.text}</ErrorText>
      </ErrorContentDiv>
      <FooterDiv>
        <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
      </FooterDiv>
    </HomeWrapper>
  );
}
