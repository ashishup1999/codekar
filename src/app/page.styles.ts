import styled from "styled-components";
import bgLogo from "@/images/bgLogo.svg";
import Image from "next/image";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";

export const HomeWrapper = styled.div<{ plainBg?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dvw;
  min-width: 300px;
  height: 100dvh;
  background: url(${(props) => props.plainBg || bgLogo.src}) no-repeat center;
  overflow-x: hidden;
  @media only screen and (max-width: 768px) {
    background: url(${(props) => props.plainBg || bgLogo.src}) no-repeat center;
    background-size: 90%;
  }
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
  height: 35px;
  width: 70px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 50px;
    margin-right: 10px;
  }
`;

export const HeaderTextSpan = styled.span`
  display: flex;
  cursor: pointer;
  margin-right: auto;
`;

export const HeaderText = styled.p`
  display: inline;
  font-weight: bolder;
  letter-spacing: 2.5px;
  font-size: 25px;
  font-weight: bold;
  background: ${GRADIENTS.whiteGreyish};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 3px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NotifImgWrapper = styled.div`
  height: 35px;
  cursor: pointer;
  position: relative;
  @media only screen and (max-width: 768px) {
    height: 35px;
  }
`;

export const NotifBadge = styled.div`
  height: 13px;
  width: 13px;
  border-radius: 10px;
  position: absolute;
  right: -3px;
  top: -2px;
  background-color: ${COLORS.brightRed};
  border-radius: 50px;
`;

export const BellImg = styled(Image)`
  height: 35px;
  width: 35px;
  padding: 0px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 7px -3px #000000;
  background-color: white;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 50px;
`;

export const UserImgWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border: 2px solid white;
  border-radius: 50px;
  box-shadow: 0px 0px 7px -3px #000000;
  background-color: white;
  cursor: pointer;
  margin-left: 10px;
  overflow: hidden;
`;

export const UserImg = styled(Image)`
  height: auto;
  width: 100%;
`;

export const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    margin-bottom: auto;
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

export const ErrorIcon = styled(Image)`
  height: 100px;
`;

export const ErrorText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
`;

export const ErrorContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0 20px;
`;

export const NotifModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  width: 100%;
  min-height: 200px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  font-weight: bold;
`;
