import styled from "styled-components";
import theme from "../styles/theme";
import { Text, Flex, DropdownMenu } from "./index";
import { space, flexbox, width } from "styled-system";
import { Icon } from "../assets/icons/index";
import { Button } from "./index";
import { useState } from "react";
import { motion } from "framer-motion";

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

const StyledDropdown = styled.ul`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black_400}};
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  padding: 8px 8px 8px 14px;
  appearance: none;
  outline:0;
  font-size: 14px;
  line-height: 22px;
  font-family: inter-medium;
  display: flex;
  align-items: center;
  position; relative;
  justify-content: space-between;
  width: 160px;
  margin: 0;

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
    ${width}

`;

const Dropdown = ({
  dropdownLabel,
  Placeholder,
  Label,
  HintText,
  bgColor,
  children,
  value,
  ArrowLabel,
  onClickArrow,
  animateIcon,
  IconLeft,
  IconLeftName,
  width,
  Menuwidth,
  ...props
}) => {
  return (
    <Flex.Column>
      {dropdownLabel && (
        <Text.Heading_XXS color={theme.colors.white} mb={1}>
          {Label}
        </Text.Heading_XXS>
      )}

      <StyledDropdown bgColor={bgColor} {...props}>
        {/* {IconLeft && <Icon name={IconLeftName} width="18px" height="18px" />} */}
        {Placeholder}

        {ArrowLabel}

        <Button.IconOnly
          sort="secondary"
          size="xs"
          iconName="chevron_down"
          height="12px"
          width="12px"
          ml={2}
          onClick={onClickArrow}
          Animate={animateIcon}
        />
      </StyledDropdown>

      {children}

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
