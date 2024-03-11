import React, { ChangeEventHandler, MouseEventHandler } from "react";
import {
  CreateBtn,
  CreateNewWrapper,
  NameInput,
  Title,
} from "./CreateNew.styles";
import Modal from "./Modal";

const CreateNew = ({
  title,
  inputVal,
  themeColor,
  onBtnClick,
  onNameChange,
}: {
  title: string;
  inputVal: string;
  themeColor: string;
  onBtnClick: MouseEventHandler;
  onNameChange: ChangeEventHandler;
}) => {
  return (
    <Modal width="250px" height="fit-content">
      <CreateNewWrapper>
        <Title color={themeColor}>{title}</Title>
        <NameInput value={inputVal} bdcolor={themeColor} onChange={onNameChange}/>
        <CreateBtn
          bgcolor={themeColor}
          onClick={inputVal ? onBtnClick : () => {}}
        >
          Create
        </CreateBtn>
      </CreateNewWrapper>
    </Modal>
  );
};

export default CreateNew;
