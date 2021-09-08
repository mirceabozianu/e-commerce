import React from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  position: relative;
  display: inline-block
  //Show the dropdown menu on hover

  &:hover{
      background-color:white;
  }
`;
const DropdownContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")}
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
`;
const Categories = ({ value }) => {
  return (
    <Dropdown>
      <p>{value}</p>
      <DropdownContent>
        <a href="/electronics">Link 1</a>
        <a href="/jewelery">Link 1</a>
        <a href="/men-clothes">Link 1</a>
        <a href="/women-clothes">Link 1</a>
      </DropdownContent>
    </Dropdown>
  );
};
export default Categories;
