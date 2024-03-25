"use client";
import React from "react";
import { LoaderBg, LoaderImage, LoaderWrapper } from "./Loader.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const Loader = ({ defaultDisp }: { defaultDisp?: string }) => {
  return (
    <LoaderBg id="loader" defaultDisp={defaultDisp}>
      <LoaderWrapper>
        <LoaderImage src={COMMON_IMAGES.logo} alt="" />
      </LoaderWrapper>
    </LoaderBg>
  );
};

export default Loader;
