"use client";
import {
  AuthHeader,
  CheckBoxIcon,
  ErrAlerIcon,
  ErrAlertMessage,
  ExtraOptionDiv,
  EyeDiv,
  EyeIcon,
  FinalButton,
  LinkText,
  MinGapDiv,
  NormalText,
} from "../Auth.styles";
import eyeIcon from "@/images/eye.svg";
import eyeCloseIcon from "@/images/eyeClose.svg";
import tickCheck from "@/images/tickChecked.svg";
import tickUncheck from "@/images/tickUnchecked.svg";
import { TextInput } from "../AuthInputs";
import useLogin from "@/hooks/useLogin";
import { ERROR_EXLAMATION } from "@/constants/StaticImages";

const Login = () => {
  const {
    values,
    errors,
    showPass,
    rememberMe,
    isBtnActive,
    alertMsg,
    onChangeUserName,
    onChangePassword,
    onEyeClick,
    onRememberMe,
    onProceed,
  } = useLogin();

  return (
    <>
      {alertMsg && (
        <ErrAlertMessage>
          <ErrAlerIcon src={ERROR_EXLAMATION} alt="" /> {alertMsg}
        </ErrAlertMessage>
      )}
      <AuthHeader>Login</AuthHeader>
      <TextInput
        label="Username"
        type="text"
        value={values.userName}
        err={errors.userName}
        suffix={undefined}
        onChange={onChangeUserName}
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
      <ExtraOptionDiv>
        <CheckBoxIcon
          src={rememberMe ? tickCheck : tickUncheck}
          alt=""
          onClick={onRememberMe}
        />
        <NormalText>Remember me</NormalText>
        <LinkText href="/forgotPassword">Forgot Password?</LinkText>
      </ExtraOptionDiv>
      <MinGapDiv />
      <FinalButton disabled={!isBtnActive} onClick={onProceed}>
        Login
      </FinalButton>
      <span>
        <NormalText>or</NormalText> <LinkText href="/signUp">Sign Up</LinkText>
      </span>
    </>
  );
};

export default Login;
