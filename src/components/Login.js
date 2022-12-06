import { Children, useEffect, useRef, useState } from "react";
import { Modal, Flex, Box, Text, Button } from "../primitives/index";
import theme from "../styles/theme";
import { Icon } from "../assets/icons";

const Login = ({ bgonClick }) => {
  const userRef = useRef();
  const errRef = errRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
    >
      <Modal width="400px" justifyContent="center">
        <Flex.Column>
          <Text.Heading_MD justifyContent="center">Login</Text.Heading_MD>

          <Text.P_SM color={theme.colors.white_500}>
            Enter your credentials to access your account
          </Text.P_SM>
        </Flex.Column>

        <Text.P_SM
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </Text.P_SM>

        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          ></input>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          ></input>

          <Button sort="primary" size="md">
            Sign In
            <Icon name="arrow_up" />
          </Button>
        </form>

        <p>Don’t have an account? | Register here</p>

        {/* https://www.youtube.com/watch?v=X3qyxo_UTR4&ab_channel=DaveGray */}
      </Modal>

      <Modal.BG onClick={bgonClick} />
    </Box>
  );
};

export default Login;
