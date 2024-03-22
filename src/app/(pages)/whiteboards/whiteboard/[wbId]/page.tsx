"use client";
import React, { useContext } from "react";
import {
  EditorSection,
  EditorWrapper,
  LanguageDD,
  LanguageDDOption,
  WbHeaderDiv,
  WbHeaderRightDiv,
  WbNameDiv,
  ConsoleSection,
  RunButton,
  Wrapper,
  SaveSection,
  SaveBtn,
  WbNameEdit,
  InputDiv,
  FieldName,
  InputField,
  OutputDiv,
  OutputArea,
  Saved,
  EditiorField,
} from "./IndividualWb.styles";
import { PG_LANG_OPTIONS } from "@/constants/CommonConstants";
import runIcon from "@/images/run.svg";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import useIndividualWb from "@/hooks/useIndividualWb";

const IndividualWhiteBoard = ({ params }: { params: { wbId: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const {
    wbName,
    wbAuthor,
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
    onChangewbName,
    onWbRun,
    onSaveFile,
  } = useIndividualWb({ wbId: params?.wbId });

  return (
    <Wrapper>
      <EditorSection>
        <WbHeaderDiv>
          <SaveSection>
            {nameEdit ? (
              <WbNameEdit
                ref={pageNameRef}
                value={wbName}
                onChange={onChangewbName}
                onBlur={nameEditToggle}
                maxLength={40}
              />
            ) : (
              <WbNameDiv onClick={nameEditToggle}>{wbName}</WbNameDiv>
            )}
            {wbAuthor === basicDetails?.userName && (
              <>
                <SaveBtn onClick={onSaveFile}>Save</SaveBtn>
                {saved && <Saved>Saved...</Saved>}
              </>
            )}
          </SaveSection>
          <WbHeaderRightDiv>
            <RunButton src={runIcon} alt="" onClick={onWbRun} />
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
          </WbHeaderRightDiv>
        </WbHeaderDiv>
        <EditorWrapper>
          <EditiorField
            key={selectedLang}
            value={values[selectedLang]}
            onChange={(e) => setValue(selectedLang, e?.target?.value)}
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

export default IndividualWhiteBoard;
