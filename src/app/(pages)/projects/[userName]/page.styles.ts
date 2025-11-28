import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 20px;
  padding: 18px;
  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
  @media only screen and (min-width: 1500px) {
    width: 1500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProjectsDiv = styled.div<{ align: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: ${(props) => (props.align ? "space-between" : "flex-start")};
  margin: ${(props) => (props.align ? "auto" : "0")};
  flex-wrap: wrap;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
