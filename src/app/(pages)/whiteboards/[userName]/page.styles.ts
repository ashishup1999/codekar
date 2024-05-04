import styled from "styled-components";

export const WbWrapper = styled.div`
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

export const WbDiv = styled.div<{align: boolean}>`
  display: flex;
  justify-content: ${(props) => (props.align ? "center" : "flex-start")};
  margin: ${(props) => (props.align ? "auto" : "0")};
  width: 100%;
  flex-wrap: wrap;
`;
