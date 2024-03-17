"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  HEADER_TO_BORDER_CLR,
  LINEAR_GRADS,
} from "@/constants/CommonConstants";
import {
  EachSection,
  ExploreDiv,
  ExploreWrapper,
  SearchBarDiv,
  SearchBarInput,
  SearchIcon,
  SearchIconDiv,
  SecName,
} from "./page.styles";
import {
  HeaderDiv,
  HeaderText,
  HeaderTextWrapper,
  LogoImg,
  UserImg,
} from "../layout.styles";
import { COMMON_IMAGES, OPTION_ICONS } from "@/constants/StaticImages";

const Explore = () => {
  const router = useRouter();

  useEffect(() => {
    const allEachSections = document.querySelectorAll(".EachSection");
    allEachSections.forEach((es) => {
      es.addEventListener("wheel", (event: any) => {
        event.preventDefault();
        es.scrollLeft += event.deltaY;
      });
    });
  }, []);

  return (
    <>
      <HeaderDiv>
        <LogoImg
          src={COMMON_IMAGES.logo}
          alt=""
          onClick={() => router.push("/")}
        />
        <HeaderTextWrapper
          bgColorGrad={LINEAR_GRADS.brightRed}
          borderclr={HEADER_TO_BORDER_CLR.explore}
        >
          <HeaderText>Explore</HeaderText>
        </HeaderTextWrapper>
        <UserImg src={COMMON_IMAGES.userCircle} alt="" />
      </HeaderDiv>
      <ExploreWrapper>
        <SearchBarDiv>
          <SearchBarInput />
          <SearchIconDiv>
            <SearchIcon src={OPTION_ICONS.search} alt="" />
          </SearchIconDiv>
        </SearchBarDiv>
        <ExploreDiv>
          <SecName>Profiles</SecName>
          <EachSection className="EachSection">
            {/* <ProfileCard profileImg="x.png" userName="" /> */}
          </EachSection>
          <SecName>Projects</SecName>
          <EachSection className="EachSection">
            {/* <ProjectCard /> */}
          </EachSection>
          <SecName>Playgrounds</SecName>
          <EachSection className="EachSection">{/* <PgCard /> */}</EachSection>
          <SecName>Whiteboards</SecName>
          <EachSection className="EachSection">{/* <WbCard /> */}</EachSection>
        </ExploreDiv>
      </ExploreWrapper>
    </>
  );
};

export default Explore;
