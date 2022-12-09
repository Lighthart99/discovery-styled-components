import styled from "styled-components";
import { backgroundColor, color, fontSize, space, textAlign, width } from "styled-system";
import theme from "../styles/theme";
import propTypes from 'prop-types';
import { Icon } from "../assets/icons/index";



const sort = (props) => {
  switch (props.sort) {
    case "primary":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary_500};

          &:hover {
            background-color: ${theme.colors.primary_600};
          }

          &:focus {
            background-color: ${theme.colors.primary_500};
            outline: 1px solid ${theme.colors.primary_500};
            box-shadow: 0 0 0 4px ${theme.colors.primary_40};
          }

          &:disabled {
            color: ${theme.colors.white_900};
            background-color: ${theme.colors.black_600};
          };
        `
    case "secondary":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_600};
  
          &:hover {
            background-color: ${theme.colors.black_400};
          }
          &:focus {
            background-color: ${theme.colors.black_600};
            outline: 1px solid ${theme.colors.primary_500};
            box-shadow: 0 0 0 4px ${theme.colors.primary_40};
          }
        `
  }
};

const size = (props) => {
  switch (props.size) {
    case "md":
      return `
        padding: 10px 16px;
      `
    case "md-icon-only":
      return `
         padding: 12px 12px;
        `
    case "sm":
      return `
          padding: 6px 12px;
      `
    case "sm-icon-only":
      return `
          padding: 9px 9px;
        `  
    case "xs":
      return `
        padding: 7px 7px;
      `
  }
}

const outline = (props) => {
  switch (props.outline) {
    case "primary":
      return `
        border: 1px solid ${theme.colors.primary_500};
        background-color: transparent;

        &:hover {
          background-color: ${theme.colors.primary_500};
        };

        &:focus {
          background-color: ${theme.colors.black_600};
        };

        &:disabled {
          border: 1px solid ${theme.colors.black_600};
          background-color: transparent;
        };
      `
    case "secondary":
      return `
      border: 1px solid ${theme.colors.black_600};
      background-color: transparent;

      &:hover {
        background-color: ${theme.colors.black_600};
      };

      :focus {
        background-color: ${theme.colors.black_700};
      };
      `  
  }
}

const depth = (props) => {
  switch (props.depth) {
    case "primary":
      return `
        background: ${theme.colors.primary_500};
        box-shadow: 
        0px 4px 0px #003580,
        0px 8px 0px rgba(0, 0, 0, 0.25),
        inset 0px 1px 0px rgba(255, 255, 255, 0.25);
        transform: translateY(0px)

        &:hover {
          background-color: ${theme.colors.primary_600};
        };

        &:active {
          transform: translateY(2px);
          box-shadow: 
          0px 2px 0px #003580,
          0px 4px 0px #0B0E12, 
          inset 0px 1px 0px rgba(255, 255, 255, 0.25);
        };
      `
    case "secondary":
      return `
      background: ${theme.colors.black_500};
      box-shadow: 
      0px 4px 0px #151B22,
      0px 8px 0px rgba(0, 0, 0, 0.25),
      inset 0px 1px 0px rgba(255, 255, 255, 0.15);

      &:hover {
        background-color: ${theme.colors.black_600};
      };

      &:active {
        transform: translateY(2px);
        box-shadow: 
        0px 2px 0px #151B22,
        0px 4px 0px rgba(0, 0, 0, 0.25),
        inset 0px 1px 0px rgba(255, 255, 255, 0.15);
      };
      `  
  }
}

const Button = styled.button`
  font-family: poppins-bold;
  border-radius: 8px;
  border: none;
  display: flex;
  text-align: center;
  transition: all 0.1s ease-out;
  min-width: min-content;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: transparent;
  color: white;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
    transform: scale(1);
  }

  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${sort}
  ${size}
  ${outline}
  ${depth}
  ${textAlign}
`

Button.propTypes = {
  disabled: propTypes.bool,
};


Button.displayName = "Button"

export default Button
