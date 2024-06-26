"use client";
import React, { useContext } from "react";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import { WbDiv, WbWrapper } from "./page.styles";
import WbCard from "@/components/WbCard";
import Plus from "@/components/Plus";
import useWb from "@/hooks/useWb";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { ErrorContentDiv, ErrorIcon, ErrorText } from "@/app/page.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const WhiteBoards = ({ params }: { params: { userName: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const {
    wbs,
    wbName,
    isCreateModalOpen,
    onCreateFile,
    createNewToggle,
    onFileNameChange,
    deleteWb,
  } = useWb({ userName: params.userName });

  return (
    <>
      <WbWrapper>
        {basicDetails.userName === params.userName && (
          <Plus
            themeColor={COLORS.green}
            grad={GRADIENTS.lightGreen}
            isModalOpen={isCreateModalOpen}
            fileName={wbName}
            modalTitle="Whiteboard Name"
            createNewToggle={createNewToggle}
            onCreateFile={onCreateFile}
            onFileNameChange={onFileNameChange}
          />
        )}
        <WbDiv align={!Boolean(wbs?.length)}>
          {wbs?.length ? (
            wbs.map((obj: any) => (
              <WbCard key={obj?.id} wbInfo={obj} onDelete={deleteWb} />
            ))
          ) : (
            <ErrorContentDiv>
              <ErrorIcon src={COMMON_IMAGES.notFound} alt="" />
              <ErrorText>No Whiteboards Found</ErrorText>
            </ErrorContentDiv>
          )}
        </WbDiv>
      </WbWrapper>
    </>
  );
};

export default WhiteBoards;
