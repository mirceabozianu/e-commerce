import React from "react";
import { connect } from "react-redux";
import { getProductById } from "state/products/selectors";
import styled from "styled-components";

const StyledImage = styled.img`
  height: auto;
  width: 500px;
  padding: 20px 40px;
`;

const ProductDetails = ({ wantedproduct }) => {
  if (wantedproduct) {
    return (
      <div>
        <div>
          <StyledImage src={wantedproduct.image} />
        </div>
        <div>{wantedproduct.title}</div>
        <div>{wantedproduct.price}</div>
        <div>{wantedproduct.category}</div>
        <div>{wantedproduct.description}</div>
        <button>Add to Cart</button>
      </div>
    );
  }
  return <div>Product not found</div>;
};

const mapStateToProps = () => {
  return (state, ownProps) => {
    return {
      wantedproduct: getProductById(state, ownProps),
    };
  };
};

export default connect(mapStateToProps)(ProductDetails);
