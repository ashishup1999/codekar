"use client";
import {
  Content,
  CopyrigthtText,
  FooterDiv,
  HomeWrapper,
} from "@/app/(pages)/layout.styles";
import { COMMON_TEXTS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useContext, useEffect } from "react";

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
  const { setBasicDetails } = useContext(BasicDetailsInterface);
  useEffect(() => {
    setBasicDetails({
      payload: {
        userName:
          localStorage.getItem("userName") ||
          sessionStorage.getItem("userName"),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HomeWrapper>
        <Content>{children}</Content>
        <FooterDiv>
          <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
        </FooterDiv>
      </HomeWrapper>
    </>
  );
}
