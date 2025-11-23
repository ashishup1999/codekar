import React, { useCallback } from "react";
import { AceEditorStyle, MonacoEditorStyle } from "./Editor.styles";
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
  const handleEditorMount = useCallback(
    function (editor: any, monaco: any) {
      monaco.editor.setTheme("vs-dark");
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
        async () => {
          await editor.getAction("editor.action.formatDocument").run();
          // Get new formatted code
          const updatedValue = editor.getValue();
          // Call your onChange function
          setValue(selectedLang, updatedValue);
        }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedLang]
  );

  return (
    <>
      {false && (
        <AceEditorStyle
          key={selectedLang}
          mode={LANGUAGE_MODES[selectedLang]}
          value={value}
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
      )}
      <MonacoEditorStyle
        language={selectedLang}
        value={value}
        theme="github-dark"
        width="100%"
        height="100%"
        onChange={(val: any) => setValue(selectedLang, val ?? "")}
        onMount={handleEditorMount}
        options={{
          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          snippets: true,
          minimap: { enabled: true },
          scrollbar: { verticalScrollbarSize: 6 },
          wordWrap: "on",
          tabCompletion: "on",
          parameterHints: { enabled: true },
          autoClosingBrackets: "always",
          formatOnType: true,
          smoothScrolling: true,
          lineNumbers: "on",
          cursorBlinking: "smooth",
          tabSize: 4, // Size of a tab character
          indentSize: 4,
        }}
      />
    </>
  );
};

export default Editor;
