import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setProducts } from "state/products/actions";

const StyledItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const StyledItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  height: 350px;
  width: 250px;
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
`;
const StyledImage = styled.img`
  height: auto;
  width: 100px;
  margin: 20px 0px;
`;

const Item = ({ title, image, price }) => {
  return (
    <StyledItem>
      <div>
        <StyledImage src={image} />
      </div>
      <div>{title}</div>
      <div>${price}</div>
      <button>Add to Cart</button>
    </StyledItem>
  );
};

const Products = ({ products, setProducts }) => {
  useEffect(() => {
    setProducts();
  }, [setProducts]);
  return (
    <StyledItemList products={products}>
      {products.map((product) => {
        return (
          <Item
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
  (state, ownProps) => {
    return {
      products: state.products.products.filter(
        (product) => product.category === ownProps.category
      ),
    };
  },
  { setProducts }
)(Products);
