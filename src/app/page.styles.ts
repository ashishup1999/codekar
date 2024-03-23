import styled from "styled-components";
import bgLogo from "@/images/bgLogo.svg";
import Image from "next/image";
import { GRADIENTS } from "@/constants/CommonConstants";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  background: url(${bgLogo.src}) no-repeat center;
  overflow-x: hidden;
`;

export const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: auto;
  padding: 10px 25px;
  margin-top: 20px;
`;

export const LogoImg = styled(Image)`
  height: 40px;
  cursor: pointer;
`;

export const HeaderTextSpan = styled.span`
  display: flex;
  margin-right: auto;
`;

export const HeaderText = styled.p`
  display: inline;
  font-weight: bolder;
  letter-spacing: 2.5px;
  font-size: 30px;
  font-weight: bold;
  background: ${GRADIENTS.whiteGreyish};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 3px;
`;

export const UserImg = styled(Image)`
  height: 45px;
  width: 45px;
  padding: 0px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 7px -3px #000000;
  background-color: white;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileViewDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  color: white;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const FooterDiv = styled.div`
  width: 100%;
  padding: 5px 15px;
  margin-top: auto;
  background-color: black;
`;

export const CopyrigthtText = styled.p`
  color: white;
  font-size: 14px;
`;

export const AuthDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  min-height: 400px;
  max-height: 100%;
  height: fit-content;
  align-items: center;
  padding: 30px 40px;
  border-radius: 25px;
  background-color: #ffffffef;
  box-shadow: 0px 0px 12px -6px #000000;
`;
