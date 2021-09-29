import styled from "styled-components";

export const AuthContainer = styled.div`
  margin-top: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0px;
`;
export const AuthFormWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 250px;
  justify-content: center;
  align-items: center;
  padding: 80px;
  border: 1px solid black;
  border-radius: 25px;
  h1 {
    margin-top: -35px;
    margin-bottom: 30px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  a {
    text-decoration: none;
    color: black;
  }
  button {
    width: 100px;
    border-radius: 9px;
    cursor: pointer;
    font-size: 17px;
    padding: 4px 15px;
  }
`;
