"use client";
import React from "react";
import { LoaderBg, LoaderWrapper } from "./Loader.styles";

const Loader = ({ defaultDisp }: { defaultDisp?: string }) => {
  return (
    <LoaderBg id="loader" defaultDisp={defaultDisp}>
      <LoaderWrapper>{"</>"}</LoaderWrapper>
    </LoaderBg>
  );
};

export default Loader;
