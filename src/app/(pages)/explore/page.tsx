"use client";
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
import useExplore from "@/hooks/useExplore";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import PgCard from "@/components/PgCard";
import WbCard from "@/components/WbCard";

const Explore = () => {
  const router = useRouter();
  const {
    profilesRef,
    projsRef,
    pgsRef,
    wbsRef,
    profiles,
    projs,
    pgs,
    wbs,
    searchKey,
    onChangeSearch,
    handleScroll,
  } = useExplore();

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
          <SearchBarInput value={searchKey} onChange={onChangeSearch} />
          <SearchIcon src={OPTION_ICONS.search} alt="" />
        </SearchBarDiv>
        <ExploreDiv>
          {Boolean(profiles?.length) && <SecName>Profiles</SecName>}
          <EachSection
            className="EachSection"
            ref={profilesRef}
            onScroll={() => handleScroll(profilesRef, 0)}
          >
            {profiles.map((obj) => {
              return <ProfileCard key={obj?.userId} userName={obj?.userName} />;
            })}
          </EachSection>
          {Boolean(projs?.length) && <SecName>Projects</SecName>}
          <EachSection
            className="EachSection"
            ref={projsRef}
            onScroll={() => handleScroll(projsRef, 1)}
          >
            {projs.map((obj) => {
              return (
                <ProjectCard
                  key={obj?.projectId}
                  projInfo={{
                    id: obj?.projectId,
                    name: obj?.projectName,
                    author: obj?.userName,
                    previewHtml: obj?.previewHtml,
                  }}
                />
              );
            })}
          </EachSection>
          {Boolean(pgs?.length) && <SecName>Playgrounds</SecName>}
          <EachSection
            className="EachSection"
            ref={pgsRef}
            onScroll={() => handleScroll(pgsRef, 2)}
          >
            {pgs.map((obj) => {
              return (
                <PgCard
                  key={obj?.pgId}
                  pgInfo={{
                    id: obj?.pgId,
                    name: obj?.pgName,
                    author: obj?.userName,
                  }}
                />
              );
            })}
          </EachSection>
          {Boolean(wbs.length) && <SecName>Whiteboards</SecName>}
          <EachSection
            className="EachSection"
            ref={wbsRef}
            onScroll={() => handleScroll(wbsRef, 3)}
          >
            {wbs.map((obj) => {
              return (
                <WbCard
                  key={obj?.wbId}
                  wbInfo={{
                    id: obj?.wbId,
                    name: obj?.wbName,
                    author: obj?.userName,
                  }}
                />
              );
            })}
          </EachSection>
        </ExploreDiv>
      </ExploreWrapper>
    </>
  );
};

export default Explore;
