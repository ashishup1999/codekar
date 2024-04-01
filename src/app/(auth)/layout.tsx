"use client";
import { COMMON_TEXTS, FULL_PAGE_ERRORS } from "@/constants/CommonConstants";
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
import { useContext, useEffect } from "react";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useRouter } from "next/navigation";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);
  const { userName, errorMsg } = basicDetails;
  const lsUserName =
    typeof window !== "undefined" ? localStorage.getItem("userName") : "";
  if (errorMsg && Object.keys(FULL_PAGE_ERRORS).includes(errorMsg)) {
    throw FULL_PAGE_ERRORS[errorMsg];
  }

  useEffect(() => {
    if (userName) router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  useEffect(() => {
    if (lsUserName) {
      setBasicDetails({ payload: { userName: lsUserName } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
        <HeaderTextSpan onClick={() => router.push(`/`)}>
            <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
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
