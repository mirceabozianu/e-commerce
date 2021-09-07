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

export const NavBar = styled.header`
  padding: 0px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 64px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #4e5863;
`;

export const NavUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

export const NavLi = styled.li`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: white;
  padding: 20px 30px;
  margin :hover {
    transition: 0.3s;
    color: black;
    background-color: rgba(0, 136, 169, 0.7);
  }
  a {
    color: white;
    text-decoration: none;
  }
`;