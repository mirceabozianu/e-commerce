import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-color: ${props => props.error ? "red" : "black"};

`;

const Input = ({...otherProps }) => {
  return <StyledInput {...otherProps} />;
};
export default Input;
