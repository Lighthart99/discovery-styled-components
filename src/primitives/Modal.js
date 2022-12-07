import React, { Children } from "react";
import styled from "styled-components";
import { color, textAlign, space, flexbox, fontSize, fontFamily, lineHeight, zIndex, position, width, maxHeight, height, maxWidth, justifyContent } from "styled-system";
import theme from "../styles/theme";
import Box from "./Box";
import { Text, Flex } from './index'


const Modal = styled.div`
  position: relative;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  display: flex;
  background-color: ${theme.colors.black_600};
  border-radius: 12px;
  z-index: 11;
  ${color}
  ${textAlign}
  ${space}
  ${flexbox}
  ${fontFamily}
  ${fontSize}
  ${lineHeight}
  ${zIndex}
  ${position}
  ${width}
  ${maxWidth}
  ${height}
  ${maxHeight}
  ${justifyContent}
`

export default Modal


