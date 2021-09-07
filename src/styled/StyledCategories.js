import styled from "styled-components";
export const StyledLi = styled.li`
  float: left;
`;

export const Dropbtn = styled.div`
  cursor: pointer;
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: #4e5863;
`;

export const DropDownContent = styled.div`
  display: none;
  margin-left: -10px;
  position: absolute;
  background-color: #4e5863;
  min-width: 160px;
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: black;
  }
  &:hover ${DropDownContent} {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
`;

export const SubA = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #4f7990;
  }
`;
