import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProducts } from "state/products/actions";
import ItemCard from "components/common/ItemCard";
import styled from "styled-components";

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

const ShowCase = ({ products, setProducts, categories }) => {
  useEffect(() => {
    setProducts();
  }, [setProducts]);

  const categoryNames = categories?.map((category) => category.name);

  const getProductsByCategory = (categoryName) => {
    const firstFourProducts = products
      ?.filter((product) => product.category === categoryName)
      .slice(0, 4);

    return firstFourProducts.map(
      (product) =>
        product.category === categoryName && (
          <ItemCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        )
    );
  };

  return (
    <div>
      {categoryNames.map((name) => (
        <StyledShowcase key={name}>
          <h1>{name}</h1>
          <SyledShowcaseItem>{getProductsByCategory(name)}</SyledShowcaseItem>
        </StyledShowcase>
      ))}
    </div>
  );
};

export default connect(
  (state) => {
    return {
      products: state.products.products,
      categories: state.categories.categories,
    };
  },
  { setProducts }
)(ShowCase);
