"use client";
import {
  AuthHeader,
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

const SignUp = () => {
  const {
    values,
    errors,
    showPass,
    onChangeUserName,
    onChangePassword,
    onChangeEmail,
    onChangeFullName,
    onEyeClick,
  } = useSignUp();

  return (
    <>
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
      <FinalButton>Sign Up</FinalButton>
      <span>
        <NormalText>or</NormalText> <LinkText href="/login">Login</LinkText>
      </span>
    </>
  );
};

export default SignUp;
