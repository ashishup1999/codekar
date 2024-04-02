import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import Image from "next/image";
import styled from "styled-components";

export const NotifType = styled.p`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 5px;
  margin-left: 2px;
  color: ${COLORS.brightRed};
`;

export const NotifSec = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  position: relative;
  margin-top: 3px;
  flex-wrap: wrap;
  padding: 10px 0;
  gap: 5px;
`;

export const Connection = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 10px;
  border-radius: 10px;
  background-image: ${GRADIENTS.redishPink};
  box-shadow: 0px 0px 7px -3px #000000;
  cursor: pointer;
`;

export const ConnectionImg = styled(Image)`
  width: 28px;
  height: 28px;
  background-color: white;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 30px;
  padding: 5px 0;
  cursor: pointer;
  margin: 0 10px;
`;

export const ConnName = styled.p`
  font-size: 12px;
  color: white;
  margin-right: auto;
`;

export const OptionImg = styled(Image)`
  width: 28px;
  height: 28px;
  background-color: white;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 30px;
  padding: 9px 0;
  cursor: pointer;
  margin: 0 3px;
`;

export const NoNotification = styled.p`
  display: inline;
  width: 70%;
  margin: auto;
  text-align: center;
`;
