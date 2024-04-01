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
  NotifBadge,
  NotifImgWrapper,
  UserImg,
} from "@/app/page.styles";
import {
  COMMON_TEXTS,
  FULL_PAGE_ERRORS,
  HOME_OPTIONS,
} from "@/constants/CommonConstants";
import OptionCards from "@/components/OptionCards";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { useRouter } from "next/navigation";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import useNotificaton from "@/hooks/useNotification";
import NotificationModal from "@/components/NotificationModal";

const Home = () => {
  const router = useRouter();
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);
  const { userName, errorMsg } = basicDetails;
  const { notifCnt, notifModalOpen, notifModalToggle, setNotifCount } =
    useNotificaton();
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
            <HeaderTextSpan onClick={() => router.push(`/`)}>
              <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
              <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
            </HeaderTextSpan>
            <NotifImgWrapper onClick={() => notifModalToggle()}>
              <UserImg src={COMMON_IMAGES.bell} alt="" />
              {notifCnt !== 0 && <NotifBadge />}
            </NotifImgWrapper>
            <UserImg
              src={COMMON_IMAGES.userCircle}
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
      <NotificationModal
        modalOpen={notifModalOpen}
        onClick={notifModalToggle}
        setNotifCount={setNotifCount}
      />
    </>
  );
};

export default Home;
