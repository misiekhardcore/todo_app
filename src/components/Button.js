import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: #ff6f47;
  color: white;
  border: none;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;

  ${(props) =>
    props.variant === "complete" &&
    css`
      background: rgb(11, 212, 162);
    `}
`;

const Button = (props) => {
  return (
    <StyledButton {...props} onClick={() => props.onClickHandler()}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
