import styled from "styled-components";

export const CreateNewWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.label<{ color: string }>`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.color};
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

export const CreateBtn = styled.button<{ bgcolor: string }>`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
`;
