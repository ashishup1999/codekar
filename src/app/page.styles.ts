import styled from "styled-components";
import Image from "next/image";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";

export const HomeWrapper = styled.div<{ plainBg?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dvw;
  min-width: 300px;
  height: 100dvh;
  overflow-x: hidden;
  background-image: ${GRADIENTS.grad1};
`;

export const HeaderDiv = styled.nav`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 10px 25px;
`;

export const LogoImg = styled(Image)`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const HeaderTextSpan = styled.span`
  display: flex;
  cursor: pointer;
  margin-right: auto;
  align-items: center;
`;

export const HeaderText = styled.p`
  display: inline;
  font-weight: bolder;
  letter-spacing: 2.5px;
  font-size: 18px;
  font-weight: bold;
  background: ${GRADIENTS.whiteGreyish};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NotifImgWrapper = styled.div`
  height: 30px;
  cursor: pointer;
  position: relative;
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
  height: 30px;
  width: 30px;
  padding: 0px 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 7px -3px #000000;
  background-color: ${COLORS.offWhite};
  cursor: pointer;
  margin-left: 10px;
  border-radius: 50px;
`;

export const UserImgWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 2px solid ${COLORS.offWhite};
  border-radius: 50px;
  box-shadow: 0px 0px 7px -3px #000000;
  background-color: ${COLORS.offWhite};
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
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const HomeContentWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    margin-bottom: auto;
    margin-top: 100px;
  }
`;

export const AuthContentDiv = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    margin-bottom: auto;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 20px;
  }
`;

export const FooterDiv = styled.div`
  width: 100%;
  padding: 5px 15px;
`;

export const CopyrigthtText = styled.p`
  color: ${COLORS.offWhite};
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
  background: ${COLORS.vsBlack};
  box-shadow: 0px 0px 12px -6px #000000;
`;

export const ErrorIcon = styled(Image)`
  height: 100px;
`;

export const ErrorText = styled.p`
  color: ${COLORS.offWhite};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const ErrorContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;
`;

export const NotifModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  min-width: 300px;
  height: 100%;
  position: relative;
  width: 100%;
  min-height: 200px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  font-weight: bold;
  color: ${COLORS.purple};
  margin-bottom: 10px;
`;

export const TagLineDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    display: none;
  }
`;

export const TagLine = styled.p`
  font-size: 50px;
  color: ${COLORS.blue};
  position: relative;
  padding-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${COLORS.offWhite};
    left: 0;
    bottom: 0;
  }
`;

export const TagSubLine = styled.p`
  font-size: 20px;
  color: #faf9f6;
  text-align: justify;
  margin-top: 20px;
  color: ${COLORS.offWhite};
`;
