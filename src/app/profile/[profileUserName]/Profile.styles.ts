import { GRADIENTS } from "@/constants/CommonConstants";
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
`;

export const ProfileDiv = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  flex-direction: column;
  width: 130px;
  flex-wrap: wrap;
  gap: 5px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const Icon = styled(Image)`
  width: 60px;
  height: 60px;
  background-color: white;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 5px;
  padding: 14px 0;
  cursor: pointer;
  margin-right: auto;
  @media only screen and (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const IconSmall = styled(Image)`
  width: 30px;
  height: 30px;
  background-color: white;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 30px;
  padding: 5px 0;
  cursor: pointer;
  margin: 0 10px;
`;

export const ConnectionWrapper = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  width: 400px;
  min-height: 200px;
  @media only screen and (max-width: 768px) {
    width: 97vw;
  }
`;

export const ConnectionSec = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  position: relative;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const Connection = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
  padding: 15px 10px;
  margin: 5px;
  min-width: 180px;
  height: fit-content;
  border-radius: 10px;
  background-image: ${GRADIENTS.redishPink};
  box-shadow: 0px 0px 7px -3px #000000;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const ConnName = styled.p`
  font-size: 12px;
  color: white;
  margin-right: auto;
`

export const CrossIcon = styled(Image)`
  width: 25px;
  height: 25px;
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;
