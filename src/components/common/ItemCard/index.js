import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMatchingPath } from "state/products/selectors";

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
  padding: 20px 0px;
`;
const StyledPrice = styled.div`
  position: relative;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const ItemCard = ({ title, image, price, id, path }) => {
  return (
    <StyledItem>
      <StyledLink to={`${path}/${id}`}>
        <div>
          <StyledImage src={image} />
        </div>
        <div>{title}</div>
        <StyledPrice>${price}</StyledPrice>
      </StyledLink>
      <button>Add to Cart</button>
    </StyledItem>
  );
};

const mapStateToProps = () => {
  const matchingPath = getMatchingPath();
  return (state, ownProps) => {
    return {
      path: matchingPath(state, ownProps),
    };
  };
};
export default connect(mapStateToProps)(ItemCard);
