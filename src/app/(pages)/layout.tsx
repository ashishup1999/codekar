"use client";
import { COMMON_TEXTS } from "@/constants/CommonConstants";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useContext, useEffect } from "react";
import {
  CopyrigthtText,
  FooterDiv,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  HomeWrapper,
  LogoImg,
  UserImg,
} from "../page.styles";
import { Content } from "./layout.styles";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    monaco: any;
  }
}

export default function PageLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const lsUserName = localStorage.getItem("userName");
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);

  useEffect(() => {
    setBasicDetails({ payload: { userName: lsUserName } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {" "}
      {basicDetails?.userName && (
        <HomeWrapper>
          <HeaderDiv>
            <HeaderTextSpan>
              <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
              <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
            </HeaderTextSpan>
            <UserImg
              src={COMMON_IMAGES.userCircle}
              alt=""
              onClick={() => router.push(`/profile/${lsUserName}`)}
            />
          </HeaderDiv>
          <Content>{children}</Content>
          <FooterDiv>
            <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
          </FooterDiv>
        </HomeWrapper>
      )}
    </>
  );
}
