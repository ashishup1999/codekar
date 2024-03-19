import Image from "next/image";
import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 20px 0px;
  padding: 10px 40px;
  gap: 40px;
  @media (max-width: 450px) {
    align-items: center;
    padding: 10px 0;
  }
`;

export const ProfileDiv = styled.div`
  display: flex;
  gap: 20px;
`;

export const VisitSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const VisitOptions = styled.p<{ bggrad: string }>`
  width: 100%;
  padding: 10px 15px;
  text-align: center;
  background-image: ${(props) => props.bggrad};
  color: white;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

export const IconSection = styled.div`
  display: flex;
  width: 130px;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Icon = styled(Image)`
  width: 60px;
  height: 60px;
  background-color: white;
  margin: auto;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 5px;
  padding: 14px 0;
  cursor: pointer;
`;
