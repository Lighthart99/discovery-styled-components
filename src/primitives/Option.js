import styled from "styled-components";
import { alignItems, color, fontSize, space, textAlign, width, height } from "styled-system";
import theme from "../styles/theme";
import {Icon} from "../assets/icons/index"

export const StyledOption = styled.option`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {

  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black_500};
    box-shadow: ${theme.Shadows.Inner_t_dropshadow};
  }

  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${textAlign}
  ${fontSize}
  ${alignItems}
  ${height}
`

const Option = ({children, value, iconName}) => {
  return (
    <StyledOption value={value}>
      {Icon && (
        <Icon name={iconName}></Icon>
      )}
      {children}

      <Icon name="chevron_down"></Icon>
    </StyledOption>
  );
}

export default Option