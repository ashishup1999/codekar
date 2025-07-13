"use client";
import {
  EachSection,
  ExploreDiv,
  ExploreWrapper,
  SearchBarDiv,
  SearchBarInput,
  SearchIcon,
  SecName,
  ViewMore,
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
    pageSize,
    onChangeSearch,
    onViewMore,
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
          {Boolean(profiles?.length) && (
            <>
              <SecName>Profiles</SecName>
              <EachSection className="EachSection" ref={profilesRef}>
                {profiles.map((obj) => {
                  return (
                    <ProfileCard
                      key={obj?.userId}
                      userName={obj?.userName}
                      profImg={obj?.profileImg}
                    />
                  );
                })}
                {!(profiles?.length % pageSize) && (
                  <ViewMore onClick={() => onViewMore(0)}>View More</ViewMore>
                )}
              </EachSection>
            </>
          )}

          {Boolean(projs?.length) && (
            <>
              <SecName>Projects</SecName>
              <EachSection className="EachSection" ref={projsRef}>
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
                {!(projs?.length % pageSize) && (
                  <ViewMore onClick={() => onViewMore(1)}>View More</ViewMore>
                )}
              </EachSection>
            </>
          )}

          {Boolean(pgs?.length) && (
            <>
              <SecName>Playgrounds</SecName>
              <EachSection className="EachSection" ref={pgsRef}>
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
                {!(pgs?.length % pageSize) && (
                  <ViewMore onClick={() => onViewMore(2)}>View More</ViewMore>
                )}
              </EachSection>
            </>
          )}

          {Boolean(wbs.length) && (
            <>
              <SecName>Whiteboards</SecName>
              <EachSection className="EachSection" ref={wbsRef}>
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
                {!(wbs?.length % pageSize) && (
                  <ViewMore onClick={() => onViewMore(3)}>View More</ViewMore>
                )}
              </EachSection>
            </>
          )}
        </ExploreDiv>
      </ExploreWrapper>
    </>
  );
};

export default Explore;
