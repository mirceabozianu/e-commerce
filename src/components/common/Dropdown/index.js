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
const contentWrapperString = `display: flex;
flex-flow: column wrap;
justify-content: center`;

const StyledDropdown = styled.div`
  ${(props) =>
    props.trigger === "click" && props.isOpen
      ? `${StyledDropdownContent} {
        ${contentWrapperString}
      }`
      : props.trigger === "hover"
      ? `&:hover ${StyledDropdownContent} {
          ${contentWrapperString}
        }`
      : null}
`;

const DropdownTitle = styled.div`
  cursor: ${(props) => (props.trigger === "click" ? "pointer" : "default")};
`;

const Dropdown = ({ data, name, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledDropdown
      trigger={trigger}
      isOpen={isOpen}
      onClick={trigger === "click" ? handleClick : null}
    >
      <DropdownTitle trigger={trigger}>{name}</DropdownTitle>
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
