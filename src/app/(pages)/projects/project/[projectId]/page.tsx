"use client";
import {
  EditorSection,
  EditorWrapper,
  ErrorTxt,
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
import { useContext, useEffect, useRef } from "react";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { PgNameEdit } from "@/app/(pages)/playgrounds/pg/[pgId]/IndividualPg.styles";
import Editor from "@/components/Editor";
import HorizontalResizeDivider from "@/components/HorizontalResizeDivider";
import { SizeProviderContext } from "@/context/SizeProvider";

const IndividualProjects = ({ params }: { params: { projectId: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { isTablet, isMobile } = useContext(SizeProviderContext);
  const isDesktop = !(isTablet || isMobile);
  const { userName } = basicDetails;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const {
    currFile,
    values,
    preview,
    projectName,
    projectAuthor,
    saved,
    errTxt,
    pageNameRef,
    editorRef,
    previewRef,
    nameEdit,
    dividerLeft,
    selectFile,
    setValue,
    onSaveProject,
    nameEditToggle,
    onChangeFileName,
    onResize,
    onResetResize,
  } = useIndividualProject({ projectId: params.projectId });

  useEffect(() => {
    if (!isDesktop) {
      onResetResize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  return (
    <Wrapper key={`${isDesktop} ${isTablet} ${isMobile}`} ref={wrapperRef}>
      <EditorSection ref={editorRef}>
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
            key={currFile}
            value={values[currFile]}
            selectedLang={currFile}
            setValue={setValue}
          />
        </EditorWrapper>
      </EditorSection>
      {isDesktop && (
        <HorizontalResizeDivider
          left={dividerLeft}
          min={30}
          max={80}
          onResize={onResize}
          windowRef={wrapperRef}
        />
      )}
      <PreviewSection ref={previewRef}>
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
          {userName === projectAuthor && !errTxt && (
            <>
              <SaveBtn onClick={onSaveProject}>Save</SaveBtn>
              {saved && <Saved>Saving...</Saved>}
            </>
          )}
          {errTxt && <ErrorTxt>Invalid Name</ErrorTxt>}
        </SaveSection>
        <Preview>
          <PreviewFrame
            srcDoc={preview}
            frameBorder={0}
            sandbox="allow-scripts allow-same-origin"
          >
            {preview}
          </PreviewFrame>
        </Preview>
      </PreviewSection>
    </Wrapper>
  );
};

export default IndividualProjects;
