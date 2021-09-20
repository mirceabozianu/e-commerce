import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
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
const visibleDropdownStyles = css`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

const StyledDropdown = styled.div`
  ${(props) =>
    props.trigger === "click" &&
    props.isOpen &&
    css`
      ${StyledDropdownContent} {
        ${visibleDropdownStyles}
      }
    `}
  ${(props) =>
    props.trigger === "hover" &&
    css`
      &:hover ${StyledDropdownContent} {
        ${visibleDropdownStyles}
      }
    `}
`;

const DropdownTitle = styled.div`
  cursor: ${(props) => (props.trigger === "click" ? "pointer" : "default")};
`;

const Dropdown = ({ data, name, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (trigger !== "click") {
      return;
    }
    setIsOpen((prevState) => !prevState);
  };

  return (
<<<<<<< HEAD
    <Dropdown>
      <p>{value}</p>
      <DropdownContent>Content</DropdownContent>
    </Dropdown>
=======
    <StyledDropdown trigger={trigger} isOpen={isOpen} onClick={handleClick}>
      <DropdownTitle trigger={trigger}>{name}</DropdownTitle>
      <StyledDropdownContent>
        {data?.map((item) => (
          <StyledLink to={item.path} key={item.id}>
            {item.name}
          </StyledLink>
        ))}
      </StyledDropdownContent>
    </StyledDropdown>
>>>>>>> master
  );
};
export default Dropdown;
