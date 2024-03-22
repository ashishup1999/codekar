import { COLORS } from "@/constants/CommonConstants";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const PCWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 23vw;
  aspect-ratio: 1.3;
  padding: 12px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-color: white;
  cursor: pointer;
  position: relative;
  @media (max-width: 1400px) {
    width: 30vw;
  }
  @media (max-width: 1100px) {
    width: 43vw;
  }
  @media (max-width: 750px) {
    width: 90vw;
  }
`;

export const PCMiniWrapper = styled.div<{ bggrad: string }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 16vw;
  padding: 20px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-image: ${(props) => props.bggrad};
  cursor: pointer;
  position: relative;
  @media (max-width: 1400px) {
    width: 23vw;
  }
  @media (max-width: 1100px) {
    width: 30vw;
  }
  @media (max-width: 750px) {
    width: 43vw;
  }
  @media (max-width: 450px) {
    width: 90vw;
  }

  & > .del {
    margin: 0;
    margin-left: auto;
  }
`;

export const PCLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const PCName = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 15px;
  padding-left: 2px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const PCAuthorSpan = styled.span`
  width: 100%;
  padding-left: 2px;
`;

export const PCAuthorTitle = styled.p`
  display: inline;
  font-size: 12px;
  line-height: 13px;
  color: white;
`;

export const PCAuthorName = styled.p`
  display: inline;
  font-size: 12px;
  line-height: 13px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const PCWrapper2 = styled.div<{ bggrad: string }>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 23vw;
  aspect-ratio: 1.3;
  padding: 12px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-image: ${(props) => props.bggrad};
  position: relative;
  @media (max-width: 1400px) {
    width: 30vw;
  }
  @media (max-width: 1100px) {
    width: 43vw;
  }
  @media (max-width: 750px) {
    width: 90vw;
  }
`;

export const PCInfo = styled.div<{ bggrad: string }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 50%;
  aspect-ratio: 1.8;
  padding: 15px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-image: ${(props) => props.bggrad};
  cursor: pointer;
  position: relative;
`;

export const PCPreviewWrapper = styled.div`
  width: 75%;
  aspect-ratio: 1.4;
  padding: 0 10px 10px 0;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const PCPreview = styled.iframe`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 22px;
  border: none;
  overflow: hidden;
  border: 5px solid ${COLORS.orange};
  background-color: white;
`;

export const ActionDiv = styled.div`
  display: flex;
  margin-top: auto;
`;

export const ActionIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const UserInfoWrapper = styled.div<{ bggrad: string }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 16vw;
  height: 180PX;
  padding: 20px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-image: ${(props) => props.bggrad};
  cursor: pointer;
  position: relative;
  @media (max-width: 1400px) {
    width: 23vw;
  }
  @media (max-width: 1100px) {
    width: 30vw;
  }
  @media (max-width: 750px) {
    width: 43vw;
  }
  @media (max-width: 450px) {
    width: 90vw;
  }

  & > .del {
    margin: 0;
    margin-left: auto;
  }
`;
