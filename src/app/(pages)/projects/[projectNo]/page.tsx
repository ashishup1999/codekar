"use client";
import { Editor } from "@monaco-editor/react";
import {
  EditorSection,
  EditorWrapper,
  FileName,
  FileNameDiv,
  FileSelectionDiv,
  FileTypeImage,
  PreviewSection,
  Wrapper,
} from "./IndividualProject.styles";
import { LANG_ICONS } from "@/constants/StaticImages";
import { PROJECT_FILES } from "@/constants/CommonConstants";
import useIndividualProject from "@/hooks/useIndividualProject";

const IndividualProjects = ({ params }: { params: { projectNo: string } }) => {
  const { currFile, values, selectFile, setValue } = useIndividualProject();
  return (
    <Wrapper>
      <EditorSection>
        <FileSelectionDiv>
          {Object.keys(PROJECT_FILES).map((key) => {
            return (
              <FileNameDiv
                key={key}
                selected={key === currFile}
                onClick={() => selectFile(key)}
              >
                <FileTypeImage src={LANG_ICONS[key]} alt="" />
                <FileName>{PROJECT_FILES[key].name}</FileName>
              </FileNameDiv>
            );
          })}
        </FileSelectionDiv>
        <EditorWrapper>
          <Editor
            defaultValue={values[currFile]}
            value={values[currFile]}
            defaultLanguage={currFile}
            onChange={(val: any) => setValue(currFile, val)}
          />
        </EditorWrapper>
      </EditorSection>
      <PreviewSection>Project number {params.projectNo}</PreviewSection>
    </Wrapper>
  );
};

export default IndividualProjects;
