import Image from "next/image";
import styled from "styled-components";

export const PCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: fit-content;
  padding: 12px;
  border-radius: 22px;
  box-shadow: 0px 0px 7px -3px #000000;
  margin: 10px;
  background-color: white;
`;

export const PCPreviewImg = styled(Image)`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  margin-bottom: 5px;
  border: none;
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

export const PCExtraActions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PCAction = styled(Image)`
  height: 45px;
`;
