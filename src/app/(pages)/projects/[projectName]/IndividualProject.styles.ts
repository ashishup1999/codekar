import Image from "next/image";
import styled from "styled-components";

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

export const FileSelectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #d9d9d9;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const FileNameDiv = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 100%;
  background-color: ${(props) => (props.selected ? "white" : "inherit")};
  box-shadow: ${(props) =>
    props.selected ? "0px 0px 5px -3px #000000" : "none"};
  border-radius: 10px;
  padding: 3px;
  gap: 5px;
  cursor: pointer;
`;

export const ProjectName = styled.div`
  display: flex;
  width: fit-content;
  background-color: "white";
  border-radius: 3px;
  padding: 3px 15px 8px;
  justify-content: center;
  box-shadow: 0px 0px 5px -3px #000000;
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
  max-height: calc(100%-45px);
  width: 100%;
`;
