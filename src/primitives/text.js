import React from "react";
import styled from "styled-components";
import { color, textAlign, space, flexbox, fontSize } from "styled-system";
import theme from "../styles/theme";

const Text = styled.div`
  display: flex;
  font-family: poppins-medium; 
  ${color}
	${textAlign}
  ${space}
  ${flexbox}
  ${fontSize}
`

Text.Heading_XXS = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="poppins-bold"
      fontSize="14px"
      lineHeight="20px"
      {...props}
    >
      {children}
    </Text>
  );
};

Text.Heading_XXL = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="poppins-bold"
      fontSize="20px"
      {...props}
    >
      {children}
    </Text>
  );
};

// this was as text

export default Text


