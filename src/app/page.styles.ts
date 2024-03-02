import styled from "styled-components";
import bgLogo from "@/images/bgLogo.svg";
import Image from "next/image";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: url(${bgLogo.src}) no-repeat center;
`;

export const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: auto;
  padding: 10px 25px;
`;

export const LogoImg = styled(Image)`
  height: 45px;
  cursor: pointer;
`;

export const HeaderTextSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.p<{ color: string }>`
  display: inline;
  font-weight: bold;
  letter-spacing: 2.5px;
  font-size: 35px;
  color: ${(props) => props.color};
`;

export const UserImg = styled(Image)`
  height: 45px;
  width: 45px;
  padding: 0px 15px;
  border-radius: 50px;
  box-shadow: 0px 0px 7px -3px #000000;
  cursor: pointer;
`;

export const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterDiv = styled.div`
  width: 100%;
  padding: 5px 15px;
  margin-top: auto;
  background-color: #eee9e9;
`;

export const CopyrigthtText = styled.p`
  font-size: 14px;
`;
