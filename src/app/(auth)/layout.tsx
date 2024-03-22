"use client";
import { COMMON_TEXTS } from "@/constants/CommonConstants";
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
import { useContext, useEffect } from "react";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const lsUserName =
    typeof window !== "undefined" ? localStorage.getItem("userName") : "";

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
