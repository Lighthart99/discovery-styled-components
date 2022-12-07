import React from "react";
import styled from "styled-components";
import { flexbox, justifyContent, space } from "styled-system";
import theme from "../styles/theme";

const Close = styled.div`
  right: 0;
  top: 0;
  position: absolute;
  cursor: pointer;
  padding: 12px;
  color: ${theme.colors.black_100};
  transition: all 0.1s ease-out;

  &:hover {
    color: ${theme.colors.white};
  }
`;

Close.displayName = "Close";

export default Close;
