"use client";
import { Editor } from "@monaco-editor/react";
import {
  EditorSection,
  EditorWrapper,
  FileName,
  FileNameDiv,
  FileSelectionDiv,
  FileTypeImage,
  Preview,
  PreviewFrame,
  PreviewSection,
  ProjectName,
  SaveBtn,
  SaveSection,
  Wrapper,
} from "./IndividualProject.styles";
import { LANG_ICONS } from "@/constants/StaticImages";
import { PROJECT_FILES } from "@/constants/CommonConstants";
import useIndividualProject from "@/hooks/useIndividualProject";
import { useContext } from "react";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const IndividualProjects = ({ params }: { params: { projectId: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const {
    currFile,
    values,
    preview,
    projectName,
    projectAuthor,
    selectFile,
    setValue,
    handleEditorDidMount,
    onSaveProject,
  } = useIndividualProject({ projectId: params.projectId });
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
            onMount={handleEditorDidMount}
          />
        </EditorWrapper>
      </EditorSection>
      <PreviewSection>
        <SaveSection>
          <ProjectName>{projectName}</ProjectName>
          {userName === projectAuthor && (
            <SaveBtn onClick={onSaveProject}>Save</SaveBtn>
          )}
        </SaveSection>
        <Preview>
          <PreviewFrame srcDoc={preview} frameBorder={0}></PreviewFrame>
        </Preview>
      </PreviewSection>
    </Wrapper>
  );
};

export default IndividualProjects;
