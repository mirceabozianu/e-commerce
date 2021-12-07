import React from "react";
import { connect } from "react-redux";
import { getProductsByCategoryParam } from "state/products/selectors";
import styled from "styled-components";
import ItemCard from "components/common/ItemCard";

const StyledItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const renderItemCard = (product) => {
  return <ItemCard key={product.id} {...product} />;
};

const Products = ({ products }) => {
  return (
    <StyledItemList products={products}>
      {products?.map(renderItemCard)}
    </StyledItemList>
  );
};

export default connect((state, ownProps) => {
  return {
    products: getProductsByCategoryParam(state, ownProps),
  };
})(Products);
