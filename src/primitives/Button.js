import React from "react";
import styled, { css } from "styled-components";
import { color, fontSize, space, textAlign, width } from "styled-system";
import theme from "../styles/theme";

const sort = (props) => {
  switch (props.sort) {
    case "primary":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary_500};
  
          &:hover {
            background-color: ${theme.colors.primary_600};
          };
          &:focus {
            background-color: ${theme.colors.primary_500};
          };
        `;
    case "secondary":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_600};
  
          &:hover {
            background-color: ${theme.colors.black_400};
          }
          &:focus {
            background-color: ${theme.colors.black_600};
          };
        `;
  }
};

export const Button = styled.button`
  font-family: poppins-bold;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  outline: none;
  text-align: center;
  transition: all 0.1s ease-out;
  min-width: min-content;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: black;
  color: white;

  :active {
    transform: scale(0.99) translateY(2px);
    box-shadow: none;
  }

  ${color}
  ${fontSize}
    ${space}
    ${width}
    ${sort}
    ${textAlign}
`;

Button.displayName = "Button";

export default Button;
