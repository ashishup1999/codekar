"use client";
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
  Saved,
  Wrapper,
} from "./IndividualProject.styles";
import { LANG_ICONS } from "@/constants/StaticImages";
import { PROJECT_FILES } from "@/constants/CommonConstants";
import useIndividualProject from "@/hooks/useIndividualProject";
import { useContext } from "react";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { PgNameEdit } from "@/app/(pages)/playgrounds/pg/[pgId]/IndividualPg.styles";
import Editor from "@/components/Editor";

const IndividualProjects = ({ params }: { params: { projectId: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const {
    currFile,
    values,
    preview,
    projectName,
    projectAuthor,
    saved,
    pageNameRef,
    nameEdit,
    selectFile,
    setValue,
    onSaveProject,
    nameEditToggle,
    onChangeFileName,
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
            value={values[currFile]}
            selectedLang={currFile}
            setValue={setValue}
          />
        </EditorWrapper>
      </EditorSection>
      <PreviewSection>
        <SaveSection>
          {nameEdit ? (
            <PgNameEdit
              ref={pageNameRef}
              value={projectName}
              onChange={onChangeFileName}
              onBlur={nameEditToggle}
              maxLength={40}
            />
          ) : (
            <ProjectName onClick={nameEditToggle}>{projectName}</ProjectName>
          )}
          {userName === projectAuthor && (
            <>
              <SaveBtn onClick={onSaveProject}>Save</SaveBtn>
              {saved && <Saved>Saved...</Saved>}
            </>
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
