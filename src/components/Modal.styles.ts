import styled from "styled-components";

export const ModalBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(217, 217, 217, 25%);
  z-index: 1;
  top: 0;
  right: 0;
`;

export const ModalContainer = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 10px;
  box-shadow: 0px 4px 9px 0px #0000003f;
`;
