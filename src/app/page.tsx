"use client";
import React, { useContext, useEffect } from "react";
import {
  ContentDiv,
  CopyrigthtText,
  FooterDiv,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  HomeWrapper,
  LogoImg,
  UserImg,
} from "@/app/page.styles";
import {
  COMMON_TEXTS,
  FULL_PAGE_ERRORS,
  HOME_OPTIONS,
} from "@/constants/CommonConstants";
import OptionCards from "@/components/OptionCards";
import userCircle from "@/images/userCircle.svg";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { useRouter } from "next/navigation";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const Home = () => {
  const router = useRouter();
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);
  const { userName, errorMsg } = basicDetails;
  const lsUserName =
    typeof window !== "undefined" ? localStorage.getItem("userName") : "";
  if (errorMsg && Object.keys(FULL_PAGE_ERRORS).includes(errorMsg)) {
    throw FULL_PAGE_ERRORS[errorMsg];
  }

  useEffect(() => {
    if (!userName) {
      if (!lsUserName) {
        router.push("/login");
        return;
      }
      setBasicDetails({ payload: { userName: lsUserName } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <>
      {userName && (
        <HomeWrapper>
          <HeaderDiv>
            <HeaderTextSpan>
              <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
              <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
            </HeaderTextSpan>
            <UserImg
              src={userCircle}
              alt=""
              onClick={() => router.push(`/profile/${userName}`)}
            />
          </HeaderDiv>
          <ContentDiv>
            {HOME_OPTIONS.map((obj) => {
              return (
                <OptionCards
                  key={obj?.buttonTitle}
                  {...obj}
                  toRoute={
                    obj?.userDep ? `${obj?.toRoute}/${userName}` : obj?.toRoute
                  }
                />
              );
            })}
          </ContentDiv>
          <FooterDiv>
            <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
          </FooterDiv>
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;
