import { GRADIENTS } from "@/constants/CommonConstants";
import Image from "next/image";
import styled from "styled-components";

export const ProfileInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 30px;
  height: 100%;
  width: fit-content;
  border-radius: 10px;
  background-image: ${GRADIENTS.redishPink};
  box-shadow: 0px 0px 7px -3px #000000;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;
  }
`;

export const ProfileImage = styled(Image)`
  width: 70px;
  height: 70px;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 100px;
  border: 2px solid white; 
  background-color: white;
`;

export const TextInfos = styled.div`
  display: flex;
  flex:1 ;
  flex-direction: column;
  justify-centent: center;
  gap: 5px;
//   align-items: center;
`;

export const UserFullName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
`;

export const UserName = styled.p`
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
`;
