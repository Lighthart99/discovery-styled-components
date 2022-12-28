import "../styles/global.css";
import { Box, Input, ChatMessage } from "../primitives/index";
import theme from "../styles/theme";


const Chat = ({}) => {

  return (
    <Box
      position="fixed"
      width="320px"
      overflow="scroll"
      padding="14px"
      height="100vh"
      backgroundColor={theme.colors.black_700}
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
    >
      
      <ChatMessage>This is my message</ChatMessage>

      <Input Placeholder="Type to chat here..."/>
    </Box>
  );
};

// add for dropdown button a 'active' state

export default Chat;
