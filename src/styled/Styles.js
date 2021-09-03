import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right-style: solid;
  border-right-width: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  @media screen and (min-width: 30em) and (max-width: 60em) {
    width: 50%;
  }
  @media screen and (min-width: 60em) {
    width: 25%;
  }
  max-width: 32rem;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  margin-right: auto;
  margin-left: auto;
`;
export const Main = styled.main`
  padding: 2rem;
`;
