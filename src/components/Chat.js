import React, { useState } from "react";
import { NavItem } from "./index";
import "../styles/global.css";
import { Box, Divider, Flex, Input } from "../primitives/index";
import { motion } from "framer-motion";
import theme from "../styles/theme";
import { Button } from "./index";
import { Icon } from "../assets/icons";

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
