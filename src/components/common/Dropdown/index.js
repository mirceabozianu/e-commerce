import React, { useState } from "react";
import styled from "styled-components";

const StyledDropdownItem = styled.a`
  text-transform: capitalize;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #4f7990;
  }
`;
const StyledDropdownContent = styled.div`
  display: none;
  margin-left: -10px;
  position: absolute;
  background-color: #4e5863;
  min-width: 160px;
  z-index: 1;
`;
const StyledDropdown = styled.div`
  ${(props) =>
    props.trigger === "click" && props.isOpen
      ? `${StyledDropdownContent} {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
      }`
      : props.trigger === "hover"
      ? `&:hover ${StyledDropdownContent} {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
          }`
      : null}
`;

const Dropdown = ({ data, name, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDropdown
      trigger={trigger}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>{name}</div>
      <StyledDropdownContent>
        {data?.map((item, index) => (
          <StyledDropdownItem href={`/${item}`} key={index}>
            {item}
          </StyledDropdownItem>
        ))}
      </StyledDropdownContent>
    </StyledDropdown>
  );
};
export default Dropdown;
