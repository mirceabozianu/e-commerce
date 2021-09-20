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
  input {
    text-indent: 10px;
    border-radius: 10px;
    padding: 7px 0px;
    width: 210px;
    display: block;
    margin-top: 8px;
  }
  input:focus {
    outline: none;
    border-color: rgba(108, 122, 137, 1);
    background-color: rgba(232, 232, 232, 1);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    border-radius: 9px;
    cursor: pointer;
    font-size: 17px;
    padding: 4px 9px;
  }
  button:disabled {
    cursor: not-allowed;
  }
`;
export const ErrorText = styled.p`
  inline-size: 180px;
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 13px;
  margin-top: 3px;
  color: #b40e0e;
`;
