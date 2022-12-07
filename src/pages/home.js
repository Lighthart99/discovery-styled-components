import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { overflow } from "styled-system";
import { Sidebar, Topbar, Headers, Chat } from "../components/index";
import {
  Container,
  Flex,
  InnerContainer,
  Text,
  Section,
  Modal,
} from "../primitives";
import "../styles/global.css";
import theme from "../styles/theme";
import Base from "./Base";


export function Home() {
  return (
    <Base>
      <Headers />
        <InnerContainer>
          <Section>
            <Flex.Column>
              <Text.Heading_LG textColor={theme.colors.white}>VIP Rewards and Perks</Text.Heading_LG>
                <Text.P_SM textColor={theme.colors.white_400}>
                  Play your favorite games and level up to earn fantastic
                  rewards! Experience the most exclusive and generous VIP
                  program in the online casino industry.
                </Text.P_SM>
              </Flex.Column>
            </Section>
          </InnerContainer>
    </Base>
  );
}

export default Home;
