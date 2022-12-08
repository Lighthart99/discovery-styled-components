import styled from "styled-components";
import theme from "../styles/theme";
import {Text, Flex} from './index';
import { space, flexbox } from "styled-system";

const StyledForm = styled.input`
  border-radius: 8px;
  background-color: ${theme.colors.black_400}};
  border: none;
  color: ${theme.colors.white};
  transition: 0.2s;
  padding: 9px 14px;
  font-family: inter-medium;
  line-height: 22px;

  &:hover {
    background-color: ${theme.colors.black_300};
  }

  &:focus {
    background-color: ${theme.colors.black_300};
    border: none;
    outline: 1px solid ${theme.colors.primary_500};
    box-shadow: 0 0 0 4px ${theme.colors.primary_40};
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.white_800};

    ${space}
    ${flexbox}
}

`

const Form = ({Label, Placeholder, HintText, Password, ...props}) => {
  return ( 
    <Flex.Column mb={3}>
      <Text.Heading_XXS color={theme.colors.white} mb={1}>
        {Label}
      </Text.Heading_XXS>
      <StyledInput placeholder={Placeholder}></StyledInput>

      <Flex.Row>
        <Text.Heading_XXS color={theme.colors.white} flexGrow="1">
          {HintText}
        </Text.Heading_XXS>

        {Password && <Text.P_SM color={theme.colors.white_500} flexGrow="1" justifyContent="right">
          Forget Password
        </Text.P_SM> }
      </Flex.Row>
    </Flex.Column>
  );
};

// https://stackoverflow.com/questions/917610/put-icon-inside-input-element-in-a-form

export default Form
