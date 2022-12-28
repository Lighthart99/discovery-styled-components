import styled from "styled-components";
import { backgroundColor, color, fontSize, margin, space, textAlign, width } from "styled-system";
import theme from "../styles/theme";
import propTypes from 'prop-types';
import { Icon } from "../assets/icons/index";

const sort = (props) => {
  switch (props.sort) {
    case "blue_20":
      return `
          color: ${theme.colors.primary_200};
          background-color: ${theme.colors.primary_20};
        `
    case "yellow_20":
      return `
          color: ${theme.colors.warning_200};
          background-color: ${theme.colors.warning_20};
        `
  }
};

const size = (props) => {
  switch (props.size) {
    case "sm":
      return `
          padding: 6px 12px;
      `
    case "xs":
      return `
          padding: 4px 10px;
        `  
    case "xxs":
      return `
        padding: 4px 8px;
        border-radius: 6px;
      `
  }
}

const StyledBadge = styled.div`
  font-family: inter-medium;
  font-size: 14px;
  line-height: 20px;
  border-radius: 8px;
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: bold;
  background-color: transparent;
  color: white;

  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${sort}
  ${size}
  ${textAlign}
  ${margin}
`

const Badge = ({size, sort, children, ...props}) => {
  return (
    <StyledBadge size={size} sort={sort} {...props}>
      {children}
    </StyledBadge>
  )
}

StyledBadge.displayName = "Badge"

export default Badge
