import Image from "next/image";
import styled from "styled-components";

export const OptionWrapper = styled.div<{ bggrad: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 25px 15px;
  border-radius: 30px;
  background-image: ${(props) => props.bggrad};
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
  }
`;

export const OptionIcon = styled(Image)`
  height: 60px;
  margin-bottom: 25px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  @media only screen and (max-width: 768px) {
    width: 30%;
    margin-bottom: 0;
  }
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
  box-shadow: 0px 3px 9px 0px #0000003f;
  @media only screen and (max-width: 768px) {
    width: 60%;
    margin: auto;
  }
`;
