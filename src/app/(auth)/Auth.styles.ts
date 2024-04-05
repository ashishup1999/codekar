import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const AuthHeader = styled.p`
  color: #7f104c;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 0 10px;
`;

export const LabelText = styled.label`
  color: #7f104c;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin-left: 2px;
`;

export const ErrorText = styled.label`
  color: #e51c1c;
  font-size: 10px;
  line-height: 12px;
  margin-left: 2px;
  font-style: italic;
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  box-shadow: 0px 0px 9px 0px #0000003f;
  border-radius: 5px;
  margin-top: 5px;
  background-color: white;
`;

export const InputField = styled.input`
  height: 100%;
  flex: 1;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: #ebebeb;
  }
`;

export const EyeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1;
  background-color: #7f104c;
  border-radius: 5px;
  cursor: pointer;
`;

export const EyeIcon = styled(Image)`
  margin-top: 5px;
  height: 60%;
  width: auto;
`;

export const ExtraOptionDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0 0;
  flex-wrap: wrap;
`;
export const NormalText = styled.p`
  display: inline;
  color: #7f104c;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
`;

export const LinkText = styled(Link)`
  display: inline;
  color: #7f104c;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin-left: auto;
  text-decoration: underline;
`;

export const CheckBoxIcon = styled(Image)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  cursor: pointer;
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FinalButton = styled.button<{ disabled: boolean }>`
  min-width: 120px;
  font-size: 18px;
  padding: 10px 20px;
  color: white;
  margin-top: auto;
  margin-bottom: 5px;
  background-color: ${(props) => (props.disabled ? "grey" : "#7f104c")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 9px 0px #0000003f;
`;

export const MinGapDiv = styled.div`
  height: 50px;
`;

export const ErrAlertMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e51c1c;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  padding: 5px 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 9px 0px #0000003f;
  position: absolute;
  z-index: 1;
  top: 12%;
  gap: 7px;
`;

export const ErrAlerIcon = styled(Image)`
  height: 12px;
  width: 12px;
`;

export const ChangeSuccessSec = styled.span`
  text-content: center;
  margin-top: auto;
  margin-bottom: auto;
  fontweight: bold;
`;

export const ChangeSuccessIcon = styled(Image)`
  height: 15px;
  width: 15px;
`;
