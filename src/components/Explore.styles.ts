import { COLORS } from "@/constants/CommonConstants";
import Image from "next/image";
import styled from "styled-components";

export const ExploreWrapper = styled.div<{ hide?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  gap: 15px;
  position: absolute;
  top: 20%;
  z-index: 1;
  background-color: ${COLORS.vsBlack};
  border-radius: 15px;
  max-height: 60vh;
  overflow-y: scroll;
  @media (max-width: 780px) {
    top: 7%;
    width: calc(90% - 10px);
    align-items: center;
  }
`;

export const ExploreDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80vh;
  overflow-y: scroll;
  padding: 10px;
`;

export const SearchBarDiv = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  box-shadow: 0px 0px 9px 0px #0000003f;
  border-radius: 15px;
  margin-top: 5px;
  background-color: ${COLORS.githubDark};
  margin: 0 auto;
  padding: 0 10px;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 15px;
  padding: 0 15px;
  background-color: inherit;
  color: white;
  font-size: 15px;
  &:focus {
    outline: none;
  }
  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`;

export const SearchIcon = styled(Image)`
  height: 45px;
  width: auto;
  margin: auto;
  padding: 12px;
  margin-left: auto;
`;

export const EachSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .pc {
    width: 47%;
    aspect-ratio: inherit;
    margin: 0;
    padding: 0;
    &>div:first-child {
      margin: 0;
      width: 100%;
      aspect-ratio: inherit;
    }
    &>div:nth-child(2) {
      display: none;
    }
  }
  .pg, .wb {
    width: 47%;
    margin: 0;
    padding: 15px;
    aspect-ratio: inherit;
  }
`;

export const ViewMore = styled.div`
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  color: ${COLORS.offWhite};
`;

export const SecName = styled.p`
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  background-color: black;
  color: white;
  margin-bottom: 10px;
`;
