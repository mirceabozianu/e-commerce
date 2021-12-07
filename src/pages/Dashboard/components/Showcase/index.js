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

const ShowCase = ({ productsObj, category, title }) => {
  const renderedCategory = productsObj.find(
    (prod) => prod.category === category
  );

  return (
    <StyledShowcase key={renderedCategory?.category}>
      <h1>{title}</h1>
      <SyledShowcaseItem>
        {renderedCategory?.fourProducts?.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </SyledShowcaseItem>
    </StyledShowcase>
  );
};

export default connect((state) => ({
  productsObj: getFourProductsByCategory(state),
}))(ShowCase);
