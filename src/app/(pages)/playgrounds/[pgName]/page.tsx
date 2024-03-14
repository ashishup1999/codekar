"use client";
import React from "react";
import {
  EditorSection,
  EditorWrapper,
  LanguageDD,
  LanguageDDOption,
  PgHeaderDiv,
  PgHeaderRightDiv,
  PgNameDiv,
  PreviewSection,
  RunButton,
  Wrapper,
} from "./IndividualPg.styles";
import { Editor } from "@monaco-editor/react";
import { DEFAULT_PLAYGROUND, PG_LANG_OPTIONS } from "@/constants/CommonConstants";
import runIcon from "@/images/run.svg";
import useIndividualPg from "@/hooks/useIndividualPg";

const IndividualPlayGround = ({ params }: { params: { pgName: string } }) => {
  const {
    selectedLang,
    values,
    selectLang,
    setValue,
  } = useIndividualPg();

  return (
    <Wrapper>
      <EditorSection>
        <PgHeaderDiv>
          <PgNameDiv>{params?.pgName}</PgNameDiv>
          <PgHeaderRightDiv>
            <RunButton src={runIcon} alt="" />
            <LanguageDD value={DEFAULT_PLAYGROUND} onChange={selectLang}>
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
            defaultValue={values[selectedLang]}
            value={values[selectedLang]}
            defaultLanguage={selectedLang}
            onChange={(val: any) => setValue(selectedLang, val)}
          />
        </EditorWrapper>
      </EditorSection>
      <PreviewSection></PreviewSection>
    </Wrapper>
  );
};

export default IndividualPlayGround;
