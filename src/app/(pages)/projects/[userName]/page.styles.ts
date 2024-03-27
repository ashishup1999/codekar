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
`;

export const ProjectsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;
