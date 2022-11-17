import styled from "styled-components";
import { color, fontSize, space, textAlign, width } from "styled-system";
import theme from "../styles/theme";

// const Size = (props) => {
//   switch (props.size) {
//     case "SM":
//       return `
//         padding: 6px 6px 8px 12px;
//       `
//     default:
//       return `
//       `
//   }
// }

export const SidebarItem = styled.div`
  height: 26px;
  color: ${theme.colors.white_700};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 8px 7px 12px;
  margin-bottom: 8px;
  cursor: pointer;

  background: ${theme.colors.black_700};
  border-radius: 8px;

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.black_500};
    box-shadow: ${theme.Shadows.Inner_t_dropshadow}
  }

  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.black_500};
    box-shadow: ${theme.Shadows.Inner_t_dropshadow}
  }

  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${textAlign}
  ${fontSize}
`

export default SidebarItem