import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { overflow } from "styled-system";
import { Sidebar, Topbar, Chat } from "../components/index";
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
import AuthContext, { AuthContextProvider } from "../stores/authContext";

export function Base({ children }) {
  const { user, authReady } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch("/.netlify/functions/guides", user && {
        headers: {
          Authorization: 'Bearer' + user.token.access_token
        }
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, authReady]);

  //https://www.youtube.com/watch?v=wizwky_4YTs&list=PL4cUxeGkcC9ig-veuRaLI4QB0Ws8xMzjv&index=10&ab_channel=TheNetNinja doesn't get errors back like i menntioned, but seems like working. (previous tut)

  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 3 dropdown menus
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  // local-storages, is there a way to do this more nicely?
  useEffect(() => {
    const data = window.localStorage.getItem("SIDEBAR");
    if (data !== null) setIsSidebarOpen(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("SIDEBAR", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  useEffect(() => {
    const data = window.localStorage.getItem("CHAT");
    if (data !== null) setIsChatOpen(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("CHAT", JSON.stringify(isChatOpen));
  }, [isChatOpen]);

  return (
    <AuthContextProvider>
      <Flex flexGrow="1">
        <AnimatePresence>
          {modalOpen && (
            <Modal.Login
              modalOpen={modalOpen}
              handleClose={() => setModalOpen(!modalOpen)}
            />
          )}
        </AnimatePresence>

        <motion.div
          animate={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "100%",
            width: isSidebarOpen ? "68px" : "224px",
            minWidth: isSidebarOpen ? "68px" : "224px",
            maxWidth: isSidebarOpen ? "68px" : "224px", // added this because, weird flikkering
            overflow: isSidebarOpen ? "hidden" : "auto",
          }}
        >
          {/* // fix sidebar collapse, after fixed position it fucked it up */}
          <Sidebar
            width={isSidebarOpen ? "68px" : "224px"}
            justifyContent={isSidebarOpen ? "center" : "flex-start"}
            // Sidebar
            AnimateNavText={isSidebarOpen ? "closed" : "open"}
            AnimateLabel={{
              display: isSidebarOpen ? "none" : "",
            }}
            AnimateDropdownArrow={{
              display: isSidebarOpen ? "none" : "",
            }}
            Size={isSidebarOpen ? "10px" : ""}
            Height={isSidebarOpen ? "20px" : ""}
            // Dropdown 1
            AnimateDropdown1={isOpen ? "open" : "closed"}
            onClickDropdown1={() => setIsOpen(!isOpen)}
            ColorNavItem1={isOpen ? "#fff" : ""} // ask jacob how to attach this to design system
            BackgroundColorNavItem1={isOpen ? "#26303C" : ""} // ask jacob how to attach this to design system
            AnimateDropdownMenu1={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            // Dropdown 2
            AnimateDropdown2={isOpen2 ? "open" : "closed"}
            onClickDropdown2={() => setIsOpen2(!isOpen2)}
            ColorNavItem2={isOpen2 ? "#fff" : ""} // ask jacob how to attach this to design system
            BackgroundColorNavItem2={isOpen2 ? "#26303C" : ""}
            AnimateDropdownMenu2={{
              height: isOpen2 ? "auto" : 0,
              opacity: isOpen2 ? 1 : 0,
            }}
            // Dropdown 3
            AnimateDropdown3={isOpen3 ? "open" : "closed"}
            onClickDropdown3={() => setIsOpen3(!isOpen3)}
            ColorNavItem3={isOpen3 ? "#fff" : ""} // ask jacob how to attach this to design system
            BackgroundColorNavItem3={isOpen3 ? "#26303C" : ""} // ask jacob how to attach this to design system
            AnimateDropdownMenu3={{
              height: isOpen3 ? "auto" : 0,
              opacity: isOpen3 ? 1 : 0,
            }}
          />
        </motion.div>

        <Flex.Column flexGrow="1">
          <Topbar
            AnimateLeft={isSidebarOpen ? "open" : "closed"}
            onClickLeftArrow={() => setIsSidebarOpen(!isSidebarOpen)}
            onClickSignIn={() => setModalOpen(!modalOpen)}
            onClickRightArrow={() => setIsChatOpen(!isChatOpen)}
            AnimateRight={isChatOpen ? "open" : "closed"}
            signedOut
          />

          <Container>
            {children}
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
    </AuthContextProvider>
  );
}

export default Base;
