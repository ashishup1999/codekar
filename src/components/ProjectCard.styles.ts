import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const PCWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24%;
  aspect-ratio: 1.3;
  padding: 12px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-color: white;
  cursor: pointer;
  position: relative;
  @media (max-width: 1400px) {
    width: 31%;
  }
  @media (max-width: 1100px) {
    width: 48%;
  }
  @media (max-width: 750px) {
    width: 98%;
  }
`;

export const PCMiniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 18%;
  aspect-ratio: 1.3;
  padding: 12px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-color: white;
  cursor: pointer;
  position: relative;
  @media (max-width: 1400px) {
    width: 24%;
  }
  @media (max-width: 1100px) {
    width: 31%;
  }
  @media (max-width: 750px) {
    width: 48%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const PCPreviewImg = styled.iframe`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
  border-radius: 12px;
  margin-bottom: 5px;
  border: none;
  overflow: hidden;
  border: 1px solid #d9d9d9;
`;

export const PCDefaultImg = styled(Image)`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
  border-radius: 12px;
  margin-bottom: 5px;
  border: none;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  padding: 10%;
`;

export const PCLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const PCName = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  padding-left: 2px;
`;

export const PCAuthorSpan = styled.span`
  width: 100%;
  margin-bottom: 5px;
  padding-left: 2px;
`;

export const PCAuthorTitle = styled.p`
  display: inline;
  font-size: 14px;
  font-weight: bold;
`;

export const PCAuthorName = styled.p`
  display: inline;
  font-size: 14px;
`;