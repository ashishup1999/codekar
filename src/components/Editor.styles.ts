import styled from "styled-components";
import AceEditor from "react-ace";

//languages
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";

//themes
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-elastic_tabstops_lite";

//tools
import "ace-builds/src-noconflict/ext-language_tools";

export const AceEditorStyle = styled(AceEditor as any)`
  border-radius: 0 0 10px 10px;
  * {
    font: inherit !important;
    font-size: 14px !important;
  }
`;
