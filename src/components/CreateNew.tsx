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
  themeGrad,
  onBtnClick,
  onNameChange,
}: {
  title: string;
  inputVal: string;
    themeColor: string;
    themeGrad: string;
  onBtnClick: MouseEventHandler;
  onNameChange: ChangeEventHandler;
}) => {
  return (
    <Modal width="300px" height="220px">
      <CreateNewWrapper bggrad={themeGrad}>
        <Title>{title}</Title>
        <NameInput value={inputVal} bdcolor={themeColor} onChange={onNameChange}/>
        <CreateBtn
          color={themeColor}
          onClick={inputVal ? onBtnClick : () => {}}
        >
          Create
        </CreateBtn>
      </CreateNewWrapper>
    </Modal>
  );
};

export default CreateNew;
