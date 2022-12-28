import styled from "styled-components";
import { alignItems, color, fontSize, space, textAlign, width, height, Transform, justifyContent } from "styled-system";
import theme from "../styles/theme";

export const SidebarItem = styled.div.attrs(props => ({
  padding: props.size || "7px 8px 7px 10px;",
  height: props.height || "26px",
  justifyContent: props.justifyContent || "flex-start",
}))`

  height: ${props => props.height};
  color: ${theme.colors.white_700};
  display: flex;
  flex-direction: row;
  padding: ${props => props.padding};
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.1s ease-out;
  justify-content: ${props => props.justifyContent}

  background-color: ${theme.colors.black_700};
  border-radius: 8px;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black_500};
    box-shadow: ${theme.Shadows.Inner_t_dropshadow}
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black_500};
    box-shadow: ${theme.Shadows.Inner_t_dropshadow};
    transform: scale(0.98);
  }

  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${textAlign}
  ${fontSize}
  ${alignItems}
  ${height}
  ${justifyContent}
`

export default SidebarItem