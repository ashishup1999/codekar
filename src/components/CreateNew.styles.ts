import styled from "styled-components";

export const CreateNewWrapper = styled.div<{ bggrad?: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  background-image: ${(props) => props.bggrad};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.label`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
`;

export const NameInput = styled.input<{ bdcolor: string }>`
  height: 45px;
  width: 100%;
  padding: 3px 10px;
  border: 1px solid ${(props) => props.bdcolor};
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const CreateBtn = styled.button<{ bggrad: string; disabled?: boolean }>`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: bold;
  background-image: ${(props) => (props.disabled ? "none" : props.bggrad)};
  background-color: ${(props) => (props.disabled ? "#d9d9d9" : "none")};
  color: ${(props) => (props.disabled ? "#0000005f" : "white")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
