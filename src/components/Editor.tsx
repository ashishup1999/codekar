import React from "react";
import { AceEditorStyle } from "./Editor.styles";
import { LANGUAGE_MODES } from "@/constants/CommonConstants";

const Editor = ({
  selectedLang,
  value,
  setValue,
}: {
  selectedLang: string;
  value: string;
  setValue: (selectedLang: string, val: string) => void;
}) => {
  return (
    <>
      <AceEditorStyle
        key={selectedLang}
        mode={LANGUAGE_MODES[selectedLang]}
        value={value}
        theme="github_dark"
        width="100%"
        height="100%"
        onChange={(val: any) => setValue(selectedLang, val)}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </>
  );
};

export default Editor;
