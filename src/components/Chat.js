import "../styles/global.css";
import { Box, Input } from "../primitives/index";
import theme from "../styles/theme";

const Chat = ({}) => {

  return (
    <Box
      width="320px"
      overflow="scroll"
      padding="14px"
      height="100vh"
      maxHeight="100vh"
      backgroundColor={theme.colors.black_700}
    >

      <Input Placeholder="Type to chat here..."/>
    </Box>
  );
};

// add for dropdown button a 'active' state

export default Chat;
