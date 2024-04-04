"use client";
import {
  EachSection,
  ExploreDiv,
  ExploreWrapper,
  SearchBarDiv,
  SearchBarInput,
  SearchIcon,
  SecName,
} from "./page.styles";
import { COMMON_IMAGES, OPTION_ICONS } from "@/constants/StaticImages";
import useExplore from "@/hooks/useExplore";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import PgCard from "@/components/PgCard";
import WbCard from "@/components/WbCard";
import { ErrorContentDiv, ErrorIcon, ErrorText } from "@/app/page.styles";

const Explore = () => {
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
  const outNos =
    Number(profiles?.length) +
    Number(projs?.length) +
    Number(pgs?.length) +
    Number(wbs?.length);

  return (
    <>
      <ExploreWrapper>
        <SearchBarDiv>
          <SearchBarInput
            value={searchKey}
            onChange={onChangeSearch}
            placeholder="Type to Explore"
          />
          <SearchIcon src={OPTION_ICONS.search} alt="" />
        </SearchBarDiv>
        {searchKey && outNos == 0 && (
          <ErrorContentDiv>
            <ErrorIcon src={COMMON_IMAGES.notFound} alt="" />
            <ErrorText>No data Found</ErrorText>
          </ErrorContentDiv>
        )}
        <ExploreDiv>
          {Boolean(profiles?.length) && <SecName>Profiles</SecName>}
          <EachSection
            className="EachSection"
            ref={profilesRef}
            onScroll={() => handleScroll(profilesRef, 0)}
          >
            {profiles.map((obj) => {
              return (
                <ProfileCard
                  key={obj?.userId}
                  userName={obj?.userName}
                  profImg={obj?.profileImg}
                />
              );
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
