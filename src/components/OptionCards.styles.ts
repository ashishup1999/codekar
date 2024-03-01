import Image from "next/image";
import styled from "styled-components";

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 25px 15px;
  border-radius: 30px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-color: white;
`;

export const OptionIcon = styled(Image)`
  height: 60px;
  margin-bottom: 25px;
`;

export const OptionButton = styled.button<{ bgcolor: string }>`
  width: 95%;
  padding: 15px;
  border-radius: 50px;
  background: ${(props) => props.bgcolor};
  border: none;
  color: white;
  font-weight: 520;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
`;
