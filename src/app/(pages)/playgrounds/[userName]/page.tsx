"use client";
import React, { useContext } from "react";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import usePg from "@/hooks/usePg";
import { PgDiv, PgWrapper } from "./page.styles";
import PGCard from "@/components/PgCard";
import Plus from "@/components/Plus";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { ErrorContentDiv, ErrorIcon, ErrorText } from "@/app/page.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const Playgrounds = ({ params }: { params: { userName: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const {
    pgs,
    pgName,
    isCreateModalOpen,
    onCreateFile,
    createNewToggle,
    onFileNameChange,
    deletePg,
  } = usePg({ userName: params.userName });

  return (
    <>
      <PgWrapper>
        {basicDetails.userName === params.userName && (
          <Plus
            themeColor={COLORS.blue}
            grad={GRADIENTS.lightBlue}
            isModalOpen={isCreateModalOpen}
            fileName={pgName}
            modalTitle="Playground Name"
            createNewToggle={createNewToggle}
            onCreateFile={onCreateFile}
            onFileNameChange={onFileNameChange}
          />
        )}
        <PgDiv align={!Boolean(pgs?.length)}>
          {pgs?.length ? (
            pgs.map((obj: any) => (
              <PGCard key={obj?.id} pgInfo={obj} onDelete={deletePg} />
            ))
          ) : (
            <ErrorContentDiv>
              <ErrorIcon src={COMMON_IMAGES.notFound} alt="" />
              <ErrorText>No Playground Found</ErrorText>
            </ErrorContentDiv>
          )}
        </PgDiv>
      </PgWrapper>
    </>
  );
};

export default Playgrounds;
