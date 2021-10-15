import React from "react";
import { connect } from "react-redux";
import ItemCard from "components/common/ItemCard";
import styled from "styled-components";
import { getFourProductsByCategory } from "state/products/selectors";

const StyledShowcase = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: capitalize;
  }
`;
const SyledShowcaseItem = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const ShowCase = ({ products }) => {
  const renderShowcase = (products) => {
    return products.map((productObj) => {
      return (
        <StyledShowcase key={productObj.category}>
          <h1>{productObj.category}</h1>
          <SyledShowcaseItem key={productObj.category}>
            {productObj.fourProducts.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </SyledShowcaseItem>
        </StyledShowcase>
      );
    });
  };

  return <div>{renderShowcase(products)}</div>;
};

const mapStateToProps = () => {
  const getFourProducts = getFourProductsByCategory();
  return (state) => {
    return {
      products: getFourProducts(state),
    };
  };
};
export default connect(mapStateToProps)(ShowCase);
