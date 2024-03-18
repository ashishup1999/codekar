import styled from "styled-components";

export const CreateNewWrapper = styled.div<{bggrad:string}>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-image:${props => props.bggrad};
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.label`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: white;
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

export const CreateBtn = styled.button<{ color: string }>`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  border: none;
  color: ${(props) => props.color};
  border-radius: 10px;
  cursor: pointer;
`;
