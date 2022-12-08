import styled from "styled-components";
import theme from "../styles/theme";
import { Text, Flex } from "../primitives/index";
import { space, flexbox } from "styled-system";

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

const StyledInput = styled.input`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black_400}};
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  padding: 9px 14px;
  font-family: inter-medium;
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

const Input = ({ Label, Placeholder, HintText, Password, bgColor }) => {
  return (
    <Flex.Column mb={3}>
      <Text.Heading_XXS color={theme.colors.white} mb={1}>
        {Label}
      </Text.Heading_XXS>
      <StyledInput bgColor={bgColor} placeholder={Placeholder}></StyledInput>

      <Flex.Row>
        <Text.Heading_XXS color={theme.colors.white} flexGrow="1">
          {HintText}
        </Text.Heading_XXS>

        {Password && (
          <Text.P_SM
            color={theme.colors.white_500}
            flexGrow="1"
            justifyContent="right"
          >
            Forget Password
          </Text.P_SM>
        )}
      </Flex.Row>
    </Flex.Column>
  );
};

// https://stackoverflow.com/questions/917610/put-icon-inside-input-element-in-a-form

export default Input;
