import { GRADIENTS } from "@/constants/CommonConstants";
import Image from "next/image";
import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 20px 0px;
  padding: 10px 25px;
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

export const ExtraOptionSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  flex-wrap: wrap;
  gap: 5px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 15px 4px 7px;
  height: 40px;
  background-color: white;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const IconText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #4e0a0a;
`;

export const Icon = styled(Image)`
  height: 67%;
  width: 40px;
  margin-right: 3px;
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
  flex-direction: column;
  padding: 20px;
  width: 83vw;
  height: 100%;
  position: relative;
  max-width: 350px;
  min-height: 200px;
`;

export const ConnectionSec = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  position: relative;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Connection = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
  padding: 15px 10px;
  min-width: 100%;
  flex: 1;
  height: fit-content;
  border-radius: 10px;
  background-image: ${GRADIENTS.redishPink};
  box-shadow: 0px 0px 7px -3px #000000;
  cursor: pointer;
`;

export const ConnName = styled.p`
  font-size: 12px;
  color: white;
  margin-right: auto;
`;

export const CrossIcon = styled(Image)`
  width: 25px;
  height: 25px;
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
  z-index: 1;
`;
