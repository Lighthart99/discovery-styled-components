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

export function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Flex flexGrow="1">
      <AnimatePresence>
      {modalOpen && <Modal.Login modalOpen={modalOpen} handleClose={() => setModalOpen(!modalOpen)} />}
      </AnimatePresence>

      <motion.div
        animate={{
          width: isSidebarOpen ? "68px" : "224px",
          minWidth: isSidebarOpen ? "68px" : "224px",
          overflow: isSidebarOpen ? "hidden" : "scroll",
        }}
      >
        <Sidebar
          AnimateNavText={isSidebarOpen ? "closed" : "open"}
          AnimateLabel={{
            display: isSidebarOpen ? "none" : "",
          }}
          AnimateDropdownArrow={{
            display: isSidebarOpen ? "none" : "",
          }}
          Size={isSidebarOpen ? "10px" : ""}
          Height={isSidebarOpen ? "20px" : ""} 
        />
      </motion.div>

      <Flex.Column flexGrow="1" alignItems="center">

        <Topbar
          AnimateLeft={isSidebarOpen ? "open" : "closed"}
          onClickLeftArrow={() => setIsSidebarOpen(!isSidebarOpen)}
          onClickSignIn={() => setModalOpen(!modalOpen)}
          onClickRightArrow={() => setIsChatOpen(!isChatOpen)}
          AnimateRight={isChatOpen ? "open" : "closed"}
          
        />

        <Container>
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
              <Flex>{/* image */}</Flex>
            </Section>
          </InnerContainer>
        </Container>
      </Flex.Column>

      <motion.div
      initial={{
        width: "320px",
      }}
        animate={{
          width: isChatOpen ? "320px" : "0",
        }}
      >
        <Chat />
      </motion.div>

    </Flex>

    
  );
}

export default Home;
