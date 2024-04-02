import React from "react";
import Modal from "./Modal";
import {
  CheckOptionsDiv,
  EditHeader,
  EditSecWrapper,
  FinalButton,
  OptionHeader,
} from "./EditProfile.styles";
import { TextInput } from "@/app/(auth)/AuthInputs";
import {
  ChangeSuccessIcon,
  ChangeSuccessSec,
  CheckBoxIcon,
  CheckBoxWrap,
  ErrAlerIcon,
  ErrAlertMessage,
  EyeDiv,
  EyeIcon,
  MinGapDiv,
  NormalText,
} from "@/app/(auth)/Auth.styles";
import {
  COMMON_IMAGES,
  ERROR_EXLAMATION,
  GREEN_TICK,
} from "@/constants/StaticImages";
import useEditProfile from "@/hooks/useEditProfile";
import { CrossIcon } from "@/app/profile/[profileUserName]/Profile.styles";

const CheckBox = ({
  name,
  label,
  flag,
  toggle,
}: {
  name: string;
  label: string;
  flag: boolean;
  toggle: Function;
}) => {
  return (
    <CheckBoxWrap>
      <CheckBoxIcon
        src={flag ? COMMON_IMAGES.tickCheck : COMMON_IMAGES.tickUncheck}
        alt=""
        onClick={() => toggle(name)}
      />
      <NormalText>{label}</NormalText>
    </CheckBoxWrap>
  );
};

const EditProfile = ({ modalToggle }: { modalToggle: Function }) => {
  const {
    values,
    errors,
    showPass,
    change,
    isBtnActive,
    alertMsg,
    changeAlert,
    onChangeUserName,
    onChangeEmail,
    onChangeFullName,
    onChangeCurrPassword,
    onChangeNewPassword,
    onEyeClick,
    onChangeClick,
    onProceed,
  } = useEditProfile({ modalToggle });
  const noFieldsToEdit =
    change?.userName || change?.email || change?.fullName || change?.password;

  return (
    <>
      <Modal>
        <EditSecWrapper>
          {alertMsg && (
            <ErrAlertMessage>
              <ErrAlerIcon src={ERROR_EXLAMATION} alt="" /> {alertMsg}
            </ErrAlertMessage>
          )}
          {changeAlert ? (
            <ChangeSuccessSec>
              <ChangeSuccessIcon src={GREEN_TICK} alt="" /> {changeAlert}
            </ChangeSuccessSec>
          ) : (
            <>
              <CrossIcon
                src={COMMON_IMAGES.cross}
                alt=""
                onClick={() => modalToggle()}
              />
              <EditHeader>Edit Details</EditHeader>
              <OptionHeader>Please choose what to edit</OptionHeader>
              <CheckOptionsDiv>
                <CheckBox
                  name="password"
                  label="Password"
                  flag={change?.password}
                  toggle={onChangeClick}
                />
                <CheckBox
                  name="userName"
                  label="Username"
                  flag={change?.userName}
                  toggle={onChangeClick}
                />
                <CheckBox
                  name="email"
                  label="Email"
                  flag={change?.email}
                  toggle={onChangeClick}
                />
                <CheckBox
                  name="fullName"
                  label="Full Name"
                  flag={change?.fullName}
                  toggle={onChangeClick}
                />
              </CheckOptionsDiv>
              {noFieldsToEdit && (
                <>
                  <OptionHeader>Edit fields</OptionHeader>
                  {change?.userName && (
                    <TextInput
                      label="Username"
                      type="text"
                      value={values?.userName}
                      err={errors?.userName}
                      suffix={undefined}
                      onChange={onChangeUserName}
                    />
                  )}
                  {change?.email && (
                    <TextInput
                      label="Email"
                      type="text"
                      value={values?.email}
                      err={errors?.email}
                      suffix={undefined}
                      onChange={onChangeEmail}
                    />
                  )}
                  {change?.fullName && (
                    <TextInput
                      label="Full Name"
                      type="text"
                      value={values?.fullName}
                      err={errors?.fullName}
                      suffix={undefined}
                      onChange={onChangeFullName}
                    />
                  )}
                  <TextInput
                    label="Current Password"
                    type="password"
                    value={values?.currPassword}
                    err={errors?.currPassword}
                    suffix={undefined}
                    onChange={onChangeCurrPassword}
                  />
                  {change?.password && (
                    <TextInput
                      label="New Password Password"
                      type={showPass ? "text" : "password"}
                      value={values?.password}
                      err={errors?.password}
                      onChange={onChangeNewPassword}
                      suffix={
                        <EyeDiv onClick={onEyeClick}>
                          <EyeIcon
                            src={
                              showPass
                                ? COMMON_IMAGES.eyeCloseIcon
                                : COMMON_IMAGES.eyeIcon
                            }
                            alt=""
                          />
                        </EyeDiv>
                      }
                    />
                  )}
                  <MinGapDiv />
                  <FinalButton disabled={!isBtnActive} onClick={onProceed}>
                    Save Changes
                  </FinalButton>
                </>
              )}
            </>
          )}
        </EditSecWrapper>
      </Modal>
    </>
  );
};

export default EditProfile;
