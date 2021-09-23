import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  text-indent: 10px;
  border-radius: 10px;
  padding: 7px 0px;
  width: 210px;
  display: block;
  margin-top: 8px;
  :focus {
    outline: none;
    border-color: rgba(108, 122, 137, 1);
    background-color: rgba(232, 232, 232, 1);
  }
`;
export const ErrorText = styled.p`
  inline-size: 180px;
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 13px;
  margin-top: 3px;
  color: #b40e0e;
`;

const Input = ({
  type,
  name,
  id,
  value,
  onChange,
  onBlur,
  isTouched,
  validators,
}) => {
  const getErrorMessages = validators
    .filter((validatorFunc) => typeof validatorFunc === "string")
    .map((errorMessage) => (
      <ErrorText key={errorMessage}>{errorMessage}</ErrorText>
    ));

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <StyledInput
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {getErrorMessages.length > 0 && isTouched && getErrorMessages}
    </div>
  );
};
export default Input;
