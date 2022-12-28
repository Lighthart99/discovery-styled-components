import styled from "styled-components";
import { color, textAlign, space, flexbox, fontSize, height, background, } from "styled-system";
import theme from "../styles/theme";

const Header = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black_700};
  border-radius: 16px;
  overflow: hidden;
  ${color}
	${textAlign}
  ${space}
  ${flexbox}
  ${fontSize}
  ${height}
  ${background}
`
export default Header