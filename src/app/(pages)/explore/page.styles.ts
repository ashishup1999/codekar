import Image from "next/image";
import styled from "styled-components";

export const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 20px;
  padding: 18px;
  gap: 15px;
`;

export const ExploreDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchBarDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  height: 45px;
  box-shadow: 0px 0px 9px 0px #0000003f;
  border-radius: 5px;
  margin-top: 5px;
  background-color: white;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`;

export const SearchIconDiv = styled.div`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1;
  box-shadow: 0px 0px 9px 0px #0000003f;
  border-radius: 5px;
  cursor: pointer;
`;

export const SearchIcon = styled(Image)`
  margin-top: 5px;
  height: 60%;
  width: auto;
`;

export const EachSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  overflow-x: scroll;
  margin-bottom: 20px;
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #fff;
    }
  }
`;

export const SecName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
