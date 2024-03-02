import Image from "next/image";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const FooterDiv = styled.div`
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
  padding: 15px 25px;
`;

export const HeaderTextWrapper = styled.div<{ grad: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  flex: 1;
  background-image: ${(props) => props.grad};
  border-radius: 50px;
  margin: 0 30px 0 15px;
  box-shadow: 0px 1px 15px -7px #000000;
`;

export const HeaderText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
`;
