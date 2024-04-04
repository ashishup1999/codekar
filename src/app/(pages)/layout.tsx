"use client";
import { COMMON_TEXTS, FULL_PAGE_ERRORS } from "@/constants/CommonConstants";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useContext, useEffect } from "react";
import {
  BellImg,
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
  UserImgWrpr,
} from "../page.styles";
import { Content } from "./layout.styles";
import { useRouter } from "next/navigation";
import useNotificaton from "@/hooks/useNotification";
import NotificationModal from "@/components/NotificationModal";
import { getBase64Src } from "@/utils/CommonUtils";

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
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsInterface);
  const { userName, profileImg, errorMsg } = basicDetails;
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
        <HomeWrapper plainBg>
          <HeaderDiv>
            <HeaderTextSpan onClick={() => router.push(`/`)}>
              <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
              <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
            </HeaderTextSpan>
            <NotifImgWrapper onClick={() => notifModalToggle()}>
              <BellImg src={COMMON_IMAGES.bell} alt="" />
              {notifCnt !== 0 && <NotifBadge />}
            </NotifImgWrapper>
            <UserImgWrpr>
              <UserImg
                width={200}
                height={200}
                src={
                  profileImg
                    ? getBase64Src(profileImg)
                    : COMMON_IMAGES.defaultProfileImg
                }
                alt=""
                onClick={() => router.push(`/profile/${userName}`)}
              />
            </UserImgWrpr>
          </HeaderDiv>
          <Content>{children}</Content>
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
}
