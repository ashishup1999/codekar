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
      // Set theme
      monaco.editor.setTheme("vs-dark");

      // Ctrl+S: Format + Save
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
        async () => {
          await editor.getAction("editor.action.formatDocument").run();
          const updatedValue = editor.getValue();
          setValue(selectedLang, updatedValue);
        }
      );

      // Ctrl+Space: Trigger IntelliSense
      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Space, () =>
        monaco.editor.trigger("keyboard", "editor.action.triggerSuggest", {})
      );

      // Enable ALL essential IntelliSense features
      editor.updateOptions({
        // Core IntelliSense
        quickSuggestions: true,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: "on",
        tabCompletion: "on",
        snippetSuggestions: "inline",

        // Formatting
        formatOnType: true,
        formatOnPaste: true,
        autoIndent: "full",

        // UI/UX
        parameterHints: { enabled: true },
        matchBrackets: "always",
        autoClosingBrackets: "always",
        autoClosingOvertype: "always",
        wordBasedSuggestions: true,

        // Enhanced suggestions
        suggest: {
          showWords: true,
          showFunctions: true,
          showClasses: true,
          showConstructors: true,
          showFields: true,
          showInterfaces: true,
          showModules: true,
          showProperties: true,
          showTypes: true,
          showVariables: true,
        },
      });
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
        key={selectedLang} // Stable key prevents remounts
        language={selectedLang}
        value={value}
        theme="vs-dark" // Match handleEditorMount theme
        width="100%"
        height="100%"
        onChange={(val: any) => setValue(selectedLang, val ?? "")}
        onMount={handleEditorMount}
        options={{
          // IntelliSense - Full suite
          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnCommitCharacter: true,
          acceptSuggestionOnEnter: "on",
          tabCompletion: "on",
          snippetSuggestions: "inline",

          // Formatting
          formatOnType: true,
          formatOnPaste: true,
          autoIndent: "full",

          // UI/UX
          minimap: { enabled: false },
          scrollbar: { verticalScrollbarSize: 6 },
          wordWrap: "on",
          parameterHints: { enabled: true },
          matchBrackets: "always",
          autoClosingBrackets: "always",

          // Essential
          smoothScrolling: true,
          lineNumbers: "on",
          cursorBlinking: "smooth",
          automaticLayout: true,
          fontSize: 14,

          // Language server
          wordBasedSuggestions: true,
        }}
      />
    </>
  );
};

export default Editor;
