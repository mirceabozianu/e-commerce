import React, { Component } from "react";
import styled from "styled-components";

// const StyledUl = styled.ul`
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   background-color: #333;
// `;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  cursor: pointer;
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: #4e5863;
`;

const DropDownContent = styled.div`
  display: none;
  margin-left: -10px;
  position: absolute;
  background-color: #4e5863;
  min-width: 160px;
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
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

const SubA = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #4f7990;
  }
`;
const Categories = ({ onClick }) => {
  const handleClick = (action) => {
    if (!action) return;
    if (onClick) onClick(action);
  };
  return (
    <DropDownLi>
      <Dropbtn onClick={() => this.handleClick("DropDown")}>Categories</Dropbtn>
      <DropDownContent>
        <SubA href="/electronics" onClick={() => this.handleClick("Link1")}>
          Electronics
        </SubA>
        <SubA href="/jewelery" onClick={() => this.handleClick("Link2")}>
          Jewelery
        </SubA>
        <SubA href="/men-clothes" onClick={() => this.handleClick("Link3")}>
          Men's Clothing
        </SubA>
        <SubA href="/women-clothes" onClick={() => this.handleClick("Link4")}>
          Women's Clothing
        </SubA>
      </DropDownContent>
    </DropDownLi>
  );
};

export default Categories;
