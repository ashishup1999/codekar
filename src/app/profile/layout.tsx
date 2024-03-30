"use client";
import { FULL_PAGE_ERRORS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useRouter } from "next/navigation";
import React, { ReactElement, useContext, useEffect } from "react";

const ProfileLayout = ({ children }: { children: ReactElement }) => {
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

  return <>{userName && children}</>;
};

export default ProfileLayout;
