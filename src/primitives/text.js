import React from "react";
import styled from "styled-components";
import { color, textAlign } from "styled-system";
import theme from "../styles/theme";

const Text = styled.div`
  width: 100%;
  font-family: poppins-medium; 
  font-size: ${theme.heading.XXL}
  color: ${theme.colors.white};
  ${color}
	${textAlign}
`

Text.Heading = ({ children, Size, bold, ...props }) => {
  return (
    <Text
      fontFamily="poppins-bold"
      fontSize={Size}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Text


