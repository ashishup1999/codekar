import { GRADIENTS } from "@/constants/CommonConstants";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const LoaderBg = styled.div<{ defaultDisp?: string }>`
  // display: ${(props) => props.defaultDisp || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #00000059;
  z-index: 100;
  top: 0;
  right: 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const loaderAnim = keyframes`
  from { transform: translate3d(0, 0, 0); width: 115px; height: 98px} 
  to { transform: translate3d(0, -150px, 0); width: 100px; height: 100px}
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  padding: 25px;
  border-radius: 50%;
  background-color: white;
  font-size: 36px;
  font-weight: 500;
  animation: ${loaderAnim} 0.6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  background-image: ${GRADIENTS.radialBlackBlue};
  color: white;
`;

export const LoaderImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
