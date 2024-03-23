"use client";
import {
  AuthHeader,
  ChangeSuccessIcon,
  ChangeSuccessSec,
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
import { ERROR_EXLAMATION, GREEN_TICK } from "@/constants/StaticImages";
import useForgotPass from "@/hooks/useForgotPass";

const ForgotPassword = () => {
  const {
    values,
    errors,
    showPass,
    isBtnActive,
    alertMsg,
    changeAlert,
    currStep,
    onChangeEmail,
    onChangeOtp,
    onChangeNewPassword,
    onEyeClick,
    onGetOtp,
    onOtpVerification,
    onUpdatePass,
  } = useForgotPass();

  return (
    <>
      {alertMsg && (
        <ErrAlertMessage>
          <ErrAlerIcon src={ERROR_EXLAMATION} alt="" /> {alertMsg}
        </ErrAlertMessage>
      )}
      {currStep < 3 ? (
        <>
          <AuthHeader>Forgot Password</AuthHeader>
          {currStep === 0 && (
            <TextInput
              label="Email"
              type="text"
              value={values.email}
              err={errors.email}
              suffix={undefined}
              onChange={onChangeEmail}
            />
          )}
          {currStep === 1 && (
            <TextInput
              label="Verification Code"
              type="number"
              value={values.otp}
              err={errors.otp}
              suffix={undefined}
              onChange={onChangeOtp}
            />
          )}
          {currStep === 2 && (
            <TextInput
              label="New Password"
              type={showPass ? "text" : "password"}
              value={values.newPass}
              err={errors.newPass}
              suffix={
                <EyeDiv onClick={onEyeClick}>
                  <EyeIcon src={showPass ? eyeIcon : eyeCloseIcon} alt="" />
                </EyeDiv>
              }
              onChange={onChangeNewPassword}
            />
          )}
          <MinGapDiv />
          {currStep === 0 && (
            <FinalButton disabled={!isBtnActive} onClick={onGetOtp}>
              Get Verification Code
            </FinalButton>
          )}
          {currStep === 1 && (
            <FinalButton disabled={!isBtnActive} onClick={onOtpVerification}>
              Verify Code
            </FinalButton>
          )}
          {currStep === 2 && (
            <FinalButton disabled={!isBtnActive} onClick={onUpdatePass}>
              Update Password
            </FinalButton>
          )}
          <span>
            <NormalText>or</NormalText> <LinkText href="/login">Login</LinkText>
          </span>
        </>
      ) : (
        <ChangeSuccessSec>
          <ChangeSuccessIcon src={GREEN_TICK} alt="" /> {changeAlert}
        </ChangeSuccessSec>
      )}
    </>
  );
};

export default ForgotPassword;
