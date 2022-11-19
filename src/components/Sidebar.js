import React, { useState } from "react";
import { NavItem } from "./index";
import "../styles/global.css";
import { Box, Divider, Flex } from "../primitives/index";
import { motion } from "framer-motion";
import theme from "../styles/theme";
import { display, flex } from "styled-system";

const Sidebar = () => {
  const menuDropdown = {
    closed: { 
      // display: "none",
      height: 0, 
      overflow: "hidden", 
      opacity: 0,
      },
    open: { 
      height: "auto", 
      display: "show", 
      opacity: 1, 
      // display: "block" it works with when you put these values in motion.div line
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  const [isOpen3, setIsOpen3] = useState(false);

  const dropdownButton = {
    closed: { rotate: 0 },
    open: { rotate: -90 },
  };

  return (
    <Box
      width="224px"
      minWidth="224px"
      maxWidth="224px"
      padding="14px"
      height="100vh"
      maxHeight="100vh"
      overflow="scroll"
      backgroundColor={theme.colors.black_700}
    >
      <NavItem
        iconName="games"
        Label="Casino"
        Dropdown
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />
      <motion.div animate={isOpen ? "open" : "closed"} variants={menuDropdown}>
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
        onClick={() => setIsOpen2((isOpen2) => !isOpen2)}
      />
      <motion.div animate={isOpen2 ? "open" : "closed"} variants={menuDropdown}>
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

      <NavItem iconName="cashier" Label="Cashier" />
      <NavItem iconName="vault" Label="Vault" />
      <NavItem
        iconName="promotion"
        Label="Promotion"
        Dropdown
        onClick={() => setIsOpen3((isOpen3) => !isOpen3)}
      />
      <motion.div animate={isOpen3 ? "open" : "closed"} variants={menuDropdown}>
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

      <NavItem iconName="vip" Label="VIP" />
      <NavItem iconName="anniversary" Label="Anniversary" />
    </Box>
  );
};

export default Sidebar;
