import styled from "styled-components";

const StyledDiv = styled.div`
  padding 0px 30px;
  width: 200px;
  height: auto;
  margin: 40px 20px;
  border-style: dotted;
  }
`;
const Div = styled.div`
  padding: 30px 0px;
  display: block;
  margin: auto;
  width: 50%;
`;
const Img = styled.img`
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  border-style: dotted;
`;
const H2 = styled.h2`
  font-size: 14px;
`;
const P = styled.p`
white-space: preline;
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  align-items: center;
  font-size: 13px;
  width: auto;
`;

const Card = ({ name, price, description, image }) => {
  
  return (
    <StyledDiv>
      <Div>
        <Img alt="products" src={image} />
      </Div>
      <H2>{name}</H2>
      <P className="price">${price}</P>
      <P>{description}</P>
    </StyledDiv>
  );
};

export default Card;
