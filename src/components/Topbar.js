import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../assets/icons";
import { Logo } from "../assets/logos";
import { Box, Button, Flex } from "../primitives";
import AuthContext from "../stores/authContext";

const Topbar = ({
  onClick_signup,
  onClickSignIn,
  onClickRightArrow,
  onClickLeftArrow,
  AnimateLeft,
  AnimateRight,
  AnimateModal,
}) => {

  const {user, login} = useContext(AuthContext)
  console.log(user)

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

          <Link to="/">
            <Logo name="chips" />
          </Link>
        </Flex>

        <Flex alignItems="center" justifyContent="end" flexGrow="1">
          <Link to="/sign-up">
            <Button.IconLeft sort="secondary" size="md" iconName="games" mr={2}>
              Sign Up
            </Button.IconLeft>
          </Link>

          <Button sort="primary" size="md" onClick={onClickSignIn}>
            Sign In
          </Button>

          <Button ml={2} sort="primary" size="md" onClick={login}>
            Sign In Netlify
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
