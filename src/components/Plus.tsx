"use client";
import Image from "next/image";
import styled from "styled-components";
import plusIcon from "@/images/plus.svg";
import { ChangeEventHandler, MouseEventHandler } from "react";
import CreateNew from "./CreateNew";

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
  height: 16px;
  width: 16px;
  margin: 3px 0 1px;
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
        <PlusImg src={plusIcon} alt="" />
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
