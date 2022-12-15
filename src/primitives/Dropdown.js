import styled from "styled-components";
import theme from "../styles/theme";
import { Text, Flex } from "./index";
import { space, flexbox } from "styled-system";
import { Icon } from "../assets/icons/index";
import { StyledOption } from "./Option";

const bgColor = (props) => {
  switch (props.bgColor) {
    case "black800":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_600}};

          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.black_500};
          }

          &:focus {
            background-color: ${theme.colors.black_500};
            outline: 1px solid ${theme.colors.primary_500};
            box-shadow: 0 0 0 4px ${theme.colors.primary_40};
          }

          &:disabled {
            color: ${theme.colors.white_900};
            background-color: ${theme.colors.black_900};
          };
        `;
    case "black400":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_400}};

          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.black_300};
          }

          &:focus {
            background-color: ${theme.colors.black_300};

          }

          &:disabled {
            color: ${theme.colors.white_900};
            background-color: ${theme.colors.black_600};
          };
        `;
  }
};

const StyledDropdown = styled.select`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black_400}};
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  padding: 9px 14px;
  appearance:none;
  outline:0;
  font-size: 14px;
  line-height: 22px;

  &:focus {
    border: none;
    outline: 1px solid ${theme.colors.primary_500};
    box-shadow: 0 0 0 4px ${theme.colors.primary_40};
  }

  &::placeholder {
    color: ${theme.colors.white_800};
  }

  &:hover::placeholder {
    color: ${theme.colors.white_400};
  }

  &:focus::placeholder {
    color: ${theme.colors.white_400};
  }

    ${space}
    ${flexbox}
    ${bgColor}
}

`;

const Dropdown = ({dropdownLabel, Placeholder, Label, HintText, bgColor, children, value, ...props }) => {
  return (
    <Flex.Column>
      {dropdownLabel && (
        <Text.Heading_XXS color={theme.colors.white} mb={1}>
          {Label}
        </Text.Heading_XXS>)}

      <StyledDropdown
        width="228px"
        bgColor={bgColor}
        {...props}
      >
        {children}
      </StyledDropdown>


      {/* https://stackoverflow.com/questions/40310472/select-input-with-custom-icon */}
      {/* https://www.sitepoint.com/css3-transform-background-image/ */}

      <Flex.Row>
        <Text.Heading_XXS color={theme.colors.white} flexGrow="1">
          {HintText}
        </Text.Heading_XXS>
      </Flex.Row>
    </Flex.Column>
  );
};

export default Dropdown;
