import styled from "styled-components";

const StyledDiv = styled.div`
  
  }
`;

const Card = ({ name, price, description, image }) => {
  return (
    <StyledDiv>
        <img alt="products" src={image} />
        <h2>{name}</h2>
        <p className="price">${price}</p>
        {/* <p>{description}</p> */}
    </StyledDiv>
  );
};

export default Card;
