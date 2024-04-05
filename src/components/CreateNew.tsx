import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import {
  CreateBtn,
  CreateNewWrapper,
  NameInput,
  Title,
} from "./CreateNew.styles";
import Modal from "./Modal";
import { CrossIcon } from "@/app/profile/[profileUserName]/Profile.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { TEST_REGEX } from "@/constants/CommonConstants";
import { ErrorText } from "@/app/(auth)/Auth.styles";

const CreateNew = ({
  title,
  inputVal,
  themeColor,
  themeGrad,
  onBtnClick,
  onNameChange,
  createNewToggle,
}: {
  title: string;
  inputVal: string;
  themeColor: string;
  themeGrad: string;
  onBtnClick: MouseEventHandler;
  onNameChange: ChangeEventHandler;
  createNewToggle: Function;
}) => {
  const [err, setErr] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    if (TEST_REGEX.alphaNumeric.test(val)) {
      setErr("");
    } else {
      setErr("Project name must only have alphanumerics");
    }
    onNameChange(e);
  };

  return (
    <Modal>
      <CreateNewWrapper>
        <CrossIcon
          src={COMMON_IMAGES.cross}
          alt=""
          onClick={() => createNewToggle()}
        />
        <Title>{title}</Title>
        <NameInput value={inputVal} bdcolor={themeColor} onChange={onChange} />
        {err && <ErrorText>{err}</ErrorText>}
        <CreateBtn
          disabled={Boolean(!inputVal || err)}
          bggrad={themeGrad}
          onClick={inputVal ? onBtnClick : () => {}}
        >
          Create
        </CreateBtn>
      </CreateNewWrapper>
    </Modal>
  );
};

export default CreateNew;
