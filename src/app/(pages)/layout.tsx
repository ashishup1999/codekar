"use client";
import { COMMON_TEXTS, FULL_PAGE_ERRORS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useContext, useEffect } from "react";
import { CopyrigthtText, FooterDiv, HomeWrapper } from "../page.styles";
import { Content } from "./layout.styles";
import { useRouter } from "next/navigation";
import useNotificaton from "@/hooks/useNotification";
import NotificationModal from "@/components/NotificationModal";

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
  const { userName, errorMsg } = basicDetails;
  const { notifModalOpen, notifModalToggle, setNotifCount } = useNotificaton();
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
