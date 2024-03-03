"use client";
import {
  CopyrigthtText,
  FooterDiv,
  HeaderDiv,
  HeaderText,
  HeaderTextWrapper,
  HomeWrapper,
  LogoImg,
  UserImg,
} from "@/app/(pages)/layout.styles";
import { COMMON_TEXTS, HEADER_TO_BORDER_CLR } from "@/constants/CommonConstants";
import logo from "@/images/logo.svg";
import userCircle from "@/images/userCircle.svg";
import { usePathname, useRouter } from "next/navigation";

export default function PageLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const pageName = pathName.split("/")[1];
  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
          <LogoImg src={logo} alt="" onClick={() => router.push("/")} />
          <HeaderTextWrapper borderclr={HEADER_TO_BORDER_CLR[pageName]}>
            <HeaderText>
              {pageName.toUpperCase()[0] + pageName.slice(1)}
            </HeaderText>
          </HeaderTextWrapper>
          <UserImg src={userCircle} alt="" />
        </HeaderDiv>
        {children}
        <FooterDiv>
          <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
        </FooterDiv>
      </HomeWrapper>
    </>
  );
}
