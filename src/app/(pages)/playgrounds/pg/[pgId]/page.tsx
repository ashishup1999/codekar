"use client";
import React, { useContext } from "react";
import {
  EditorSection,
  EditorWrapper,
  LanguageDD,
  LanguageDDOption,
  PgHeaderDiv,
  PgHeaderRightDiv,
  PgNameDiv,
  ConsoleSection,
  RunButton,
  Wrapper,
  SaveSection,
  SaveBtn,
  PgNameEdit,
  InputDiv,
  FieldName,
  InputField,
  OutputDiv,
  OutputArea,
  Saved,
} from "./IndividualPg.styles";
import { Editor } from "@monaco-editor/react";
import { PG_LANG_OPTIONS } from "@/constants/CommonConstants";
import runIcon from "@/images/run.svg";
import useIndividualPg from "@/hooks/useIndividualPg";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";

const IndividualPlayGround = ({ params }: { params: { pgId: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const {
    pgName,
    pgAuthor,
    selectedLang,
    values,
    input,
    output,
    nameEdit,
    pageNameRef,
    saved,
    nameEditToggle,
    selectLang,
    setValue,
    setInput,
    onChangePgName,
    onPgRun,
    onSaveFile,
  } = useIndividualPg({ pgId: params?.pgId });

  return (
    <Wrapper>
      <EditorSection>
        <PgHeaderDiv>
          <SaveSection>
            {nameEdit ? (
              <PgNameEdit
                ref={pageNameRef}
                value={pgName}
                onChange={onChangePgName}
                onBlur={nameEditToggle}
                maxLength={40}
              />
            ) : (
              <PgNameDiv onClick={nameEditToggle}>{pgName}</PgNameDiv>
            )}
            {pgAuthor === basicDetails?.userName && (
              <>
                <SaveBtn onClick={onSaveFile}>Save</SaveBtn>
                {saved && <Saved>Saved...</Saved>}
              </>
            )}
          </SaveSection>
          <PgHeaderRightDiv>
            <RunButton src={runIcon} alt="" onClick={onPgRun} />
            <LanguageDD
              value={PG_LANG_OPTIONS[selectedLang]}
              onChange={selectLang}
            >
              {Object.keys(PG_LANG_OPTIONS).map((key) => {
                return (
                  <LanguageDDOption key={key} value={PG_LANG_OPTIONS[key]}>
                    {PG_LANG_OPTIONS[key]}
                  </LanguageDDOption>
                );
              })}
            </LanguageDD>
          </PgHeaderRightDiv>
        </PgHeaderDiv>
        <EditorWrapper>
          <Editor
            key={selectedLang}
            value={values[selectedLang]}
            theme="vs-dark"
            defaultLanguage={selectedLang}
            onChange={(val: any) => setValue(selectedLang, val)}
          />
        </EditorWrapper>
      </EditorSection>
      <ConsoleSection>
        <OutputDiv>
          <FieldName>Output</FieldName>
          <OutputArea>
            {output.map((val: any) => (
              <p key={val}>{val}</p>
            ))}
          </OutputArea>
        </OutputDiv>
        <InputDiv>
          <FieldName>Input</FieldName>
          <InputField value={input} onChange={setInput} />
        </InputDiv>
      </ConsoleSection>
    </Wrapper>
  );
};

export default IndividualPlayGround;
