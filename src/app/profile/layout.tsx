"use client"
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import React, { ReactElement, useContext, useEffect } from "react";

const ProfileLayout = ({ children }: { children: ReactElement }) => {
  const { setBasicDetails } = useContext(BasicDetailsInterface);
  useEffect(() => {
    setBasicDetails({
      payload: {
        userName: localStorage.getItem("userName"),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export default ProfileLayout;
