import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProductsByCategory } from "state/products/selectors";
import styled from "styled-components";
import ItemCard from "components/common/ItemCard";
import { setProducts } from "state/products/actions";

const StyledItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Products = ({ products, setProducts }) => {
  useEffect(() => {
    setProducts();
  }, [setProducts]);
  return (
    <StyledItemList products={products}>
      {products?.map((product) => {
        return <ItemCard key={product.id} {...product} />;
      })}
    </StyledItemList>
  );
};

const mapStateToProps = () => {
  const getProducts = getProductsByCategory();
  return (state, ownProps) => {
    return {
      products: getProducts(state, ownProps),
    };
  };
};
export default connect(mapStateToProps, { setProducts })(Products);
