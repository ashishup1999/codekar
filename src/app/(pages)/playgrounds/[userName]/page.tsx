"use client";
import React, { useContext } from "react";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import usePg from "@/hooks/usePg";
import { PgDiv, PgWrapper } from "./page.styles";
import PGCard from "@/components/PgCard";
import Plus from "@/components/Plus";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const Playgrounds = ({ params }: { params: { userName: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const {
    pgs,
    pgName,
    isCreateModalOpen,
    onCreateFile,
    onCreateNewClick,
    onFileNameChange,
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
            onCreateNew={onCreateNewClick}
            onCreateFile={onCreateFile}
            onFileNameChange={onFileNameChange}
          />
        )}
        <PgDiv>
          {pgs.map((obj: any) => (
            <PGCard key={obj?.id} pgInfo={obj} />
          ))}
        </PgDiv>
      </PgWrapper>
    </>
  );
};

export default Playgrounds;
