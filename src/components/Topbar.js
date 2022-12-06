import React from "react";
import { Icon } from "../assets/icons";
import { Logo } from "../assets/logos";
import { Box, Button, Flex } from "../primitives";

const Topbar = ({
  onClick_signup,
  onClickSignIn,
  onClickRightArrow,
  onClickLeftArrow,
  AnimateLeft,
  AnimateRight,
  AnimateModal,
}) => {

  const ArrowLeft = {
    open: { rotate: 180, transition: { duration: 0.2 } },
    closed: { rotate: 0, transition: { duration: 0.2 } },
  };

  const ArrowRight = {
    open: { rotate: 0, transition: { duration: 0.2 } },
    closed: { rotate: 180, transition: { duration: 0.2 } },
  };

  return (
    <Box width="100%" padding="24px 24px 40px">
      <Flex>
        <Flex alignItems="center" flexGrow="1">
          <Box mr={4}>
            <Button.TopbarArrow
              iconName="arrow_left"
              Variants={ArrowLeft}
              Animate={AnimateLeft}
              onClick={onClickLeftArrow}
            />
          </Box>

          <Logo name="chips" />
        </Flex>

        <Flex alignItems="center" justifyContent="end" flexGrow="1">
          <Button.IconLeft sort="secondary" size="md" iconName="games" mr={2}>
            Sign Up
          </Button.IconLeft>
          <Button sort="primary" size="md" onClick={onClickSignIn}>
            Sign In
          </Button>
          <Box ml={4}>
            <Button.TopbarArrow
              iconName="arrow_right"
              Variants={ArrowRight}
              Animate={AnimateRight}
              onClick={onClickRightArrow}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Topbar;
