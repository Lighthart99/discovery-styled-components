import React from "react";
import styled from "styled-components";
import { color, textAlign, space, flexbox, fontSize, fontFamily, lineHeight, justifyContent } from "styled-system";
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
  ${justifyContent}
`

Text.Heading_XXS = ({ children, textColor, ...props }) => {
  return (
    <Text
      fontFamily="poppins-medium"
      fontSize="14px"
      lineHeight="20px"
      color={textColor}
      {...props}
    >
      {children}
    </Text>
  );
};


Text.Heading_XXL = ({ children, textColor, ...props }) => {
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

Text.Heading_LG = ({ children, textColor, ...props }) => {
  return (
    <Text
      fontFamily="poppins-bold"
      fontSize="24px"
      line-height="32px"
      color={textColor}
      {...props}
    >
      {children}
    </Text>
  );
};

Text.Heading_MD = ({ children, textColor, ...props }) => {
  return (
    <Text
      fontFamily="poppins-bold"
      fontSize="20px"
      line-height="28px"
      color={textColor}
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


