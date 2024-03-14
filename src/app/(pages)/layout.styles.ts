import Image from "next/image";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding:10px;
`;

export const FooterDiv = styled.div`
  height: 30px;
  width: 100%;
  padding: 5px 15px;
  margin-top: auto;
  background-color: #eee9e9;
`;

export const CopyrigthtText = styled.p`
  font-size: 12px;
  margin: 2px;
`;

export const LogoImg = styled(Image)`
  height: 40px;
  cursor: pointer;
`;

export const UserImg = styled(Image)`
  height: 40px;
  width: 40px;
  padding: 0px 12px;
  border-radius: 50px;
  box-shadow: 0px 0px 7px -3px #000000;
  cursor: pointer;
`;

export const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: auto;
  padding: 10px 15px;
`;

export const HeaderTextWrapper = styled.div<{
  borderclr: string;
  bgColorGrad: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  flex: 1;
  border-radius: 50px;
  margin: 5px 30px 0 15px;
  box-shadow: 0px 1px 15px -7px #000000;
  border: 1px solid ${(props) => props.borderclr};
  background-image: ${(props) => props.bgColorGrad};
`;

export const HeaderText = styled.p`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
`;
