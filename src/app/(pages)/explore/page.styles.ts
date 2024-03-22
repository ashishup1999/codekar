import Image from "next/image";
import styled from "styled-components";

export const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  gap: 40px;
  @media (max-width: 450px) {
    align-items: center;
    padding: 10px 0;
  }
`;

export const ExploreDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchBarDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  height: 45px;
  box-shadow: 0px 0px 9px 0px #0000003f;
  border-radius: 15px;
  margin-top: 5px;
  background-color: white;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 15px;
  padding: 0 15px;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(Image)`
  height: 100%;
  width: auto;
  padding: 12px;
  margin-left: auto;
`;

export const EachSection = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  max-width: 100%;
  align-items: center;
  overflow-x: scroll;
  margin-bottom: 20px;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  & ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  &: hover {
    -ms-overflow-style: auto; /* Internet Explorer 10+ */
    scrollbar-width: auto; /* Firefox */
    & ::-webkit-scrollbar {
      display: auto; /* Safari and Chrome */
    }
  }
`;

export const SecName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 10px;
  color: white;
`;
