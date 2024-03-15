import Image from "next/image";
import styled from "styled-components";
import ddIcon from "@/images/dropDown.svg";
import { COLORS } from "@/constants/CommonConstants";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 0px 6px -3px #000000;
  border-radius: 10px;
`;

export const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-width: 65%;
`;

export const ConsoleSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-width: 35%;
  padding: 10px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
`;

export const FieldName = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #d9d9d9;
`;

export const OutputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
`;

export const OutputArea = styled.p`
  width: 100%;
  height: 100%;
  padding: 15px;
  font-size: 14px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
`;

export const InputField = styled.textarea`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 15px;
  border: none;
  resize: none;
  white-space: pre-wrap;
  &:focus {
    outline: none;
  }
`;

export const PgHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 45px;
  background-color: white;
  box-shadow: 0px 0px 5px -3px #000000;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`;

export const PgHeaderRightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LanguageDD = styled.select`
  appearance: none;
  width: fit-content;
  padding: 8px 30px 8px 14px;
  border-radius: 6px;
  border: transparent;
  color: black;
  outline: none;
  background: url(${ddIcon.src}) no-repeat right;
  background-color: #d9d9d9;
  background-position: 96%;
  background-size: 20%;
`;

export const LanguageDDOption = styled.option`
  background-color: white;
`;

export const RunButton = styled(Image)`
  height: 16px;
  width: auto;
  margin: 3px 12px;
  cursor: pointer;
`;

export const SaveSection = styled.div`
  display: flex;
  gap: 6px;
`;

export const PgNameDiv = styled.p`
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 5px;
  color: white;
  background-color: ${COLORS.blue};
  cursor: pointer;
`;

export const PgNameEdit = styled.input`
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 5px;
  color: black;
  border: 1px solid #d9d9d9;
  &: focus {
    outline: none;
  }
`;

export const SaveBtn = styled.div`
  display: flex;
  width: fit-content;
  color: white;
  border-radius: 5px;
  justify-content: center;
  font-size: 12px;
  padding: 6px 12px;
  margin-left: auto;
  background-color: #17a952;
  border: 1px solid #17a952;
  cursor: pointer;
  border: none;
`;

export const ProjectName = styled.div`
  display: flex;
  width: fit-content;
  background-color: "white";
  border-radius: 3px;
  padding: 3px 15px 8px;
  justify-content: center;
  box-shadow: 0px 0px 5px -3px #000000;
  border: 1px solid black;
`;

export const FileTypeImage = styled(Image)`
  height: 15px;
  width: auto;
`;

export const FileName = styled.p`
  font-size: 12px;
`;

export const EditorWrapper = styled.div`
  display: flex;
  flex: 1;
  max-height: calc(100% - 45px);
  width: 100%;
`;

export const PreviewFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;
