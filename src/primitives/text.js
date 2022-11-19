import React from "react";
import styled from "styled-components";
import { color, textAlign, space, flexbox, fontSize, fontFamily, lineHeight } from "styled-system";
import theme from "../styles/theme";

const Text = styled.div`
  display: flex;
  ${color}
	${textAlign}
  ${space}
  ${flexbox}
  ${fontFamily}
  ${fontSize}
  ${lineHeight}
`

Text.Heading_XXS = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="poppins-medium"
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
      fontFamily="poppins-medium"
      fontSize="20px"
      {...props}
    >
      {children}
    </Text>
  );
};

Text.Heading_LG = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="poppins-bold"
      fontSize="24px"
      line-height="32px"
      {...props}
    >
      {children}
    </Text>
  );
};

Text.P_SM = ({ children, textColor, ...props }) => {
  return (
    <Text
      fontFamily="inter-regular"
      fontSize="14px"
      lineHeight="24px"
      color={textColor}
      {...props}
    >
      {children}
    </Text>
  );
};

// this was as text

export default Text


