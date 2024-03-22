"use client";
import React from "react";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import { WbDiv, WbWrapper } from "./page.styles";
import WbCard from "@/components/WbCard";
import Plus from "@/components/Plus";
import useWb from "@/hooks/useWb";

const WhiteBoards = ({ params }: { params: { userName: string } }) => {
  const {
    wbs,
    wbName,
    isCreateModalOpen,
    onCreateFile,
    onCreateNewClick,
    onFileNameChange,
  } = useWb({ userName: params.userName });

  return (
    <>
      <WbWrapper>
        <Plus
          themeColor={COLORS.green}
          grad={GRADIENTS.lightGreen}
          isModalOpen={isCreateModalOpen}
          fileName={wbName}
          modalTitle="Whiteboard Name"
          onCreateNew={onCreateNewClick}
          onCreateFile={onCreateFile}
          onFileNameChange={onFileNameChange}
        />
        <WbDiv>
          {wbs.map((obj: any) => (
            <WbCard key={obj?.id} wbInfo={obj} />
          ))}
        </WbDiv>
      </WbWrapper>
    </>
  );
};

export default WhiteBoards;
