"use client";
import Image from "next/image";
import styled from "styled-components";
import { ChangeEventHandler, MouseEventHandler } from "react";
import CreateNew from "@/components/CreateNew";
import { COMMON_IMAGES } from "@/constants/StaticImages";

const PlusWrapper = styled.div`
  margin-right: auto;
`;

const PlusDiv = styled.div<{ grad: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: fit-content;
  background-image: ${(props) => props.grad};
  box-shadow: 0px 0px 7px -3px black;
  padding: 10px 25px;
  margin: 0 0 20px 15px;
  gap: 5px;
  cursor: pointer;
`;

const PlusImg = styled(Image)`
  height: 20px;
  width: 20px;
`;

const PlusText = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

const Plus = ({
  themeColor,
  grad,
  isModalOpen,
  fileName,
  modalTitle,
  createNewToggle,
  onCreateFile,
  onFileNameChange,
}: {
  themeColor: string;
  grad: string;
  isModalOpen: boolean;
  fileName: string;
  modalTitle: string;
  createNewToggle: MouseEventHandler;
  onCreateFile: MouseEventHandler;
  onFileNameChange: ChangeEventHandler;
}) => {
  return (
    <PlusWrapper>
      <PlusDiv grad={grad} onClick={createNewToggle}>
        <PlusImg src={COMMON_IMAGES.plusWhite} alt="" />
        <PlusText>Create New</PlusText>
      </PlusDiv>
      {isModalOpen && (
        <CreateNew
          title={modalTitle}
          inputVal={fileName}
          themeColor={themeColor}
          themeGrad={grad}
          createNewToggle={createNewToggle}
          onBtnClick={onCreateFile}
          onNameChange={onFileNameChange}
        />
      )}
    </PlusWrapper>
  );
};

export default Plus;
