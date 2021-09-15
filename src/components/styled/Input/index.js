import styled from "styled-components";

export const StyledInput = styled.input`
  border-color: ${(props) => (props.error ? "red" : "black")};
`;
