import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Sidebar, Topbar, Headers } from "../components/index";
import {
  Container,
  Flex,
  InnerContainer,
  Text,
  Section,
  Modal,
  Box,
  Input,
  Button,
} from "../primitives";
import "../styles/global.css";
import theme from "../styles/theme";
import Base from "./Base";

export function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <Base>
      <Flex.Row>
        <Box>
          <Text.Heading_LG textColor={theme.colors.white}>
            Let's Get Started
          </Text.Heading_LG>
          <Text.P_SM mb={4} textColor={theme.colors.white}>
            Welcome to the ultimate gambling experience, please fill out the
            basic forms below to get started with creating an account.
          </Text.P_SM>

          <Box>
            <Input
              bgColor="black800"
              Label="Email"
              Placeholder="Type your email..."
              ref={emailRef}
              
            />

            <Input
              bgColor="black800"
              Label="Password"
              Placeholder="Type your password..."
              ref={passwordRef}
              required
            />

            <Input
              bgColor="black800"
              Label="Confirm Password"
              Placeholder="Type your password..."
              ref={passwordConfirmRef}
              required
            />

            <Button.IconRight
              type="submit"
              sort="primary"
              size="md"
              mb={4}
              iconName="arrow_right"
            >
              Sign In
            </Button.IconRight>
          </Box>
        </Box>
      </Flex.Row>

      {/* https://www.youtube.com/watch?v=PKwu15ldZ7k&ab_channel=WebDevSimplified  14:00*/}

      {/* <InnerContainer>
      </InnerContainer> */}
    </Base>
  );
}

export default SignUp;
