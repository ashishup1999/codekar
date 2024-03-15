import Image from "next/image";
import styled from "styled-components";
import ddIcon from "@/images/dropDown.svg";

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
  max-width: 50%;
`;

export const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-width: 50%;
  padding: 10px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
`;

export const Preview = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 10px;
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

export const PgNameDiv = styled.p`
  font-size: 12px;
  font-weight: bold;
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
