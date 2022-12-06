import React, { useState } from "react";
import { NavItem } from "./index";
import "../styles/global.css";
import { Box, Divider, Flex } from "../primitives/index";
import { motion } from "framer-motion";
import theme from "../styles/theme";
import { Button } from "../components/index";
import { Icon } from "../assets/icons";

const Sidebar = ({
  AnimateNavText,
  AnimateLabel,
  AnimateDropdownArrow,
  Size,
  Height,
}) => {
  // 3 dropdown menus
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <Box
      overflow="scroll"
      padding="14px"
      height="100vh"
      maxHeight="100vh"
      backgroundColor={theme.colors.black_700}
    >
      <motion.div animateText={AnimateNavText}>
        <NavItem
          iconName="games"
          Label="Casino"
          Dropdown
          Animate={isOpen ? "open" : "closed"}
          onClick={() => setIsOpen(!isOpen)}
          AnimateLabel={AnimateLabel}
          AnimateDropdownArrow={AnimateDropdownArrow}
          Size={Size}
          Height={Height}
          Color={isOpen ? "#fff" : ""} // ask jacob how to attach this to design system
          backgroundColor={isOpen ? "#26303C" : ""} // ask jacob how to attach this to design system
        />
      </motion.div>
      <motion.div
        // animate={isOpen ? "open" : "closed"}
        // variants={menuDropdown}
        initial={{
          height: 0,
          opacity: 0,
          overflow: "hidden",
        }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <Flex flexGrow="1">
          <div className="sidebar-divider">
            <Divider direction="vertical" />
          </div>
          <Flex.Column flexGrow="1">
            <NavItem iconName="heart" Label="Favorites" />
            <NavItem iconName="chips" Label="Chips Original" />
            <NavItem iconName="games" Label="New Games" />
            <NavItem iconName="sword" Label="Feature Buy-in" />
            <NavItem iconName="games" Label="Live Shows" />
            <NavItem iconName="games" Label="Roulette" />
            <NavItem iconName="games" Label="Blackjack" />
          </Flex.Column>
        </Flex>
      </motion.div>

      <NavItem
        iconName="sports"
        Label="Sports"
        Dropdown
        Animate={isOpen2 ? "open" : "closed"}
        onClick={() => setIsOpen2(!isOpen2)}
        AnimateLabel={AnimateLabel}
        AnimateDropdownArrow={AnimateDropdownArrow}
        Size={Size}
        Height={Height}
        Color={isOpen2 ? "#fff" : ""} // ask jacob how to attach this to design system
        backgroundColor={isOpen2 ? "#26303C" : ""} // ask jacob how to attach this to design system
      />
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
          overflow: "hidden",
        }}
        animate={{
          height: isOpen2 ? "auto" : 0,
          opacity: isOpen2 ? 1 : 0,
        }}
      >
        <Flex flexGrow="1">
          <div className="sidebar-divider">
            <Divider direction="vertical" />
          </div>
          <Flex.Column flexGrow="1">
            <NavItem iconName="heart" Label="My Bets" />
            <NavItem iconName="heart" Label="Favorites" />
            <NavItem iconName="heart" Label="Live" />
            <NavItem iconName="heart" Label="American Football" />
            <NavItem iconName="heart" Label="Baseball" />
            <NavItem iconName="heart" Label="Basketball" />
            <NavItem iconName="heart" Label="Boxing" />
            <NavItem iconName="heart" Label="Esports" />
            <NavItem iconName="heart" Label="FIFA" />
            <NavItem iconName="heart" Label="Floorball" />
            <NavItem iconName="heart" Label="Futsal" />
            <NavItem iconName="heart" Label="Golf" />
            <NavItem iconName="heart" Label="Handball" />
            <NavItem iconName="heart" Label="Ice Hockey" />
          </Flex.Column>
        </Flex>
      </motion.div>

      <NavItem
        iconName="cashier"
        Label="Cashier"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
      />
      <NavItem
        iconName="vault"
        Label="Vault"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
      />
      <NavItem
        iconName="promotion"
        Label="Promotion"
        Dropdown
        Animate={isOpen3 ? "open" : "closed"}
        onClick={() => setIsOpen3(!isOpen3)}
        AnimateLabel={AnimateLabel}
        AnimateDropdownArrow={AnimateDropdownArrow}
        Size={Size}
        Height={Height}
        Color={isOpen3 ? "#fff" : ""} // ask jacob how to attach this to design system
        backgroundColor={isOpen3 ? "#26303C" : ""} // ask jacob how to attach this to design system
      />
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
          overflow: "hidden",
        }}
        animate={{
          height: isOpen3 ? "auto" : 0,
          opacity: isOpen3 ? 1 : 0,
        }}
      >
        <Flex flexGrow="1">
          <div className="sidebar-divider">
            <Divider direction="vertical" />
          </div>
          <Flex.Column flexGrow="1">
            <NavItem iconName="heart" Label="$100,000 Anniv..." />
            <NavItem iconName="heart" Label="Las Vegas Anni..." />
            <NavItem iconName="heart" Label="$10,000 Hacks..." />
            <NavItem iconName="heart" Label="730x Closest M..." />
            <NavItem iconName="heart" Label="$2000 Points R..." />
            <NavItem iconName="heart" Label="$1000 Daily Wa..." />
            <NavItem iconName="heart" Label="$1000 Daily Wa..." />
            <NavItem iconName="heart" Label="Beat Viktor Mul..." />
          </Flex.Column>
        </Flex>
      </motion.div>

      <NavItem
        iconName="vip"
        Label="VIP"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
      />
      <NavItem
        iconName="anniversary"
        Label="Anniversary"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
      />
    </Box>
  );
};

// add for dropdown button a 'active' state

export default Sidebar;
