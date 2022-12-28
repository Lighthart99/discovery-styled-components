import styled from "styled-components";
import theme from "../styles/theme";
import { Text, Flex, Box } from "./index";
import { space, flexbox } from "styled-system";
import { Icon } from "../assets/icons/index";
import { Link } from "react-router-dom";

const StyledChatMessage = styled.div`
  color: ${theme.colors.white_500};
  background-color: ${theme.colors.black_600}};
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  padding: 12px;
  appearance:none;
  list-style-type: none; 
  font-family: inter-medium;
  display: flex;
  align-items: center;
    ${space}
    ${flexbox}
}

`;

const ChatMessage = ({ children, ...props }) => {
  return (
    <StyledChatMessage {...props} mb={2}>
      <Text.P_SM>{children}</Text.P_SM>
    </StyledChatMessage>
  );
};

export default ChatMessage;
