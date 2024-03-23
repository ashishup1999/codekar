import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding:10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;