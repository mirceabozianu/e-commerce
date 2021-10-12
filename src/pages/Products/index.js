import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProducts } from "state/products/actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "components/common/ItemCard";

const StyledItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Products = ({ categories, products, setProducts }) => {
  useEffect(() => {
    setProducts();
  }, [setProducts]);

  const { category } = useParams();

  const wantedCategory = categories?.find((item) => item.id === category);

  const filteredProducts = products.filter(
    (product) => product.category === wantedCategory.name
  );

  return (
    <StyledItemList products={filteredProducts}>
      {filteredProducts?.map((product) => {
        return (
          <ItemCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </StyledItemList>
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
)(Products);
