import React from "react";
import styled from "styled-components";

const StyledHeder = styled.header`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeder>
      <h1>Todo List</h1>
    </StyledHeder>
  );
};

export default Header;
