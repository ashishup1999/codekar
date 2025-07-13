import { COLORS } from "@/constants/CommonConstants";
import Image from "next/image";
import styled from "styled-components";

export const ExploreWrapper = styled.div<{ hide?: boolean }>`
  display: ${(props) => (props.hide ? "none" : "flex")};
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
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const  ViewMore = styled.div`
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
  background-color: ${COLORS.offWhite};
  cursor: pointer;
  margin-left: 20px;
`;

export const SecName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 10px;
  color: white;
`;
