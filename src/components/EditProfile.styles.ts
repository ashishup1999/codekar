import styled from "styled-components";

export const EditSecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 500px;
  height: fit-content;
  align-items: center;
  padding: 20px 40px;
  position: relative;
  @media (max-width: 750px) {
    max-width: auto;
    width: 100%;
  }
`;

export const FinalButton = styled.button<{ disabled: boolean }>`
  width: fit-content;
  max-width: 80%;
  font-size: 18px;
  padding: 10px 20px;
  color: white;
  margin: auto;
  margin-bottom: 10px;
  background-color: ${(props) => (props.disabled ? "grey" : "#7f104c")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 9px 0px #0000003f;
`;

export const EditHeader = styled.p`
  color: #7f104c;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const OptionHeader = styled.p`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  color: black;
`;

export const CheckOptionsDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;
