import React from "react";
import {
  Dropbtn,
  DropDownContent,
  SubA,
  DropDownLi,
} from "../styled/StyledCategories";

const Categories = () => {
  return (
    <DropDownLi>
      <Dropbtn>Categories</Dropbtn>
      <DropDownContent>
        <SubA href="/electronics">Electronics</SubA>
        <SubA href="/jewelery">Jewelery</SubA>
        <SubA href="/men-clothes">Mens Clothing</SubA>
        <SubA href="/women-clothes">Womens Clothing</SubA>
      </DropDownContent>
    </DropDownLi>
  );
};

export default Categories;
