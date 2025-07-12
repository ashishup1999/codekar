import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  @media only screen and (max-width: 768px) {
    flex: 1;
    height: auto;
  }
`;