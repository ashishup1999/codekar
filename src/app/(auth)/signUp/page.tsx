"use client";
import {
  AuthHeader,
  ErrAlerIcon,
  ErrAlertMessage,
  EyeDiv,
  EyeIcon,
  FinalButton,
  LinkText,
  MinGapDiv,
  NormalText,
} from "../Auth.styles";
import eyeIcon from "@/images/eye.svg";
import eyeCloseIcon from "@/images/eyeClose.svg";
import { TextInput } from "../AuthInputs";
import useSignUp from "@/hooks/useSignUp";
import { ERROR_EXLAMATION } from "@/constants/StaticImages";

const SignUp = () => {
  const {
    values,
    errors,
    showPass,
    isBtnActive,
    alertMsg,
    onChangeUserName,
    onChangePassword,
    onChangeEmail,
    onChangeFullName,
    onEyeClick,
    onProceed,
  } = useSignUp();

  return (
    <>
      {alertMsg && (
        <ErrAlertMessage>
          <ErrAlerIcon src={ERROR_EXLAMATION} alt="" /> {alertMsg}
        </ErrAlertMessage>
      )}
      <AuthHeader>Sign Up</AuthHeader>
      <TextInput
        label="Username"
        type="text"
        value={values.userName}
        err={errors.userName}
        suffix={undefined}
        onChange={onChangeUserName}
      />
      <TextInput
        label="Email"
        type="text"
        value={values.email}
        err={errors.email}
        suffix={undefined}
        onChange={onChangeEmail}
      />
      <TextInput
        label="Full Name"
        type="text"
        value={values.fullName}
        err={errors.fullName}
        suffix={undefined}
        onChange={onChangeFullName}
      />
      <TextInput
        label="Password"
        type={showPass ? "text" : "password"}
        value={values.password}
        err={errors.password}
        suffix={
          <EyeDiv onClick={onEyeClick}>
            <EyeIcon src={showPass ? eyeIcon : eyeCloseIcon} alt="" />
          </EyeDiv>
        }
        onChange={onChangePassword}
      />
      <MinGapDiv />
      <FinalButton disabled={!isBtnActive} onClick={onProceed}>
        Sign Up
      </FinalButton>
      <span>
        <NormalText>or</NormalText> <LinkText href="/login">Login</LinkText>
      </span>
    </>
  );
};

export default SignUp;
