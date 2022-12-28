import React, { useState } from "react";
import { NavItem } from "./index";
import "../styles/global.css";
import { Box, Divider, Flex } from "../primitives/index";
import { motion } from "framer-motion";
import theme from "../styles/theme";
import { Button } from "../components/index";
import { Icon } from "../assets/icons";
import { Link } from "react-router-dom";

const Sidebar = ({
  AnimateNavText,
  AnimateLabel,
  AnimateDropdownArrow,
  Size,
  Height,
  AnimateDropdown1,
  AnimateDropdownMenu1,
  AnimateDropdown2,
  AnimateDropdownMenu2,
  AnimateDropdown3,
  AnimateDropdownMenu3,
  onClickDropdown1,
  onClickDropdown2,
  onClickDropdown3,
  ColorNavItem1,
  ColorNavItem2,
  ColorNavItem3,
  BackgroundColorNavItem1,
  BackgroundColorNavItem2,
  BackgroundColorNavItem3,
  justifyContent,
  width,
  animateSidebar,
  initialSidebar,
}) => {
  return (

    <Box
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
            Animate={AnimateDropdown1}
            onClick={onClickDropdown1}
            AnimateLabel={AnimateLabel}
            AnimateDropdownArrow={AnimateDropdownArrow}
            Size={Size}
            Height={Height}
            Color={ColorNavItem1}
            backgroundColor={BackgroundColorNavItem1}
            justifyContent={justifyContent}
            linkTo="/casino"
          />
      </motion.div>
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
          overflow: "hidden",
        }}
        animate={AnimateDropdownMenu1}
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
        Animate={AnimateDropdown2}
        onClick={onClickDropdown2}
        AnimateLabel={AnimateLabel}
        AnimateDropdownArrow={AnimateDropdownArrow}
        Size={Size}
        Height={Height}
        Color={ColorNavItem2}
        backgroundColor={BackgroundColorNavItem2}
        justifyContent={justifyContent}
      />
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
          overflow: "hidden",
        }}
        animate={AnimateDropdownMenu2}
      >
        <Flex flexGrow="1">
          <div className="sidebar-divider">
            <Divider direction="vertical" />
          </div>
          <Flex.Column flexGrow="1">
            <NavItem iconName="heart" Label="My Bets" />
            <NavItem
              iconName="heart"
              Label="Favorites"
              height="16px"
              width="16px"
            />
            <NavItem iconName="heart" Label="Live" height="16px" width="16px" />
            <NavItem
              iconName="heart"
              Label="American Football"
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Baseball"
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Basketball"
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Boxing"
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Esports"
              height="16px"
              width="16px"
            />
            <NavItem iconName="heart" Label="FIFA" height="16px" width="16px" />
            <NavItem
              iconName="heart"
              Label="Floorball"
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Futsal"
              height="16px"
              width="16px"
            />
            <NavItem iconName="heart" Label="Golf" height="16px" width="16px" />
            <NavItem
              iconName="heart"
              Label="Handball"
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Ice Hockey"
              height="16px"
              width="16px"
            />
          </Flex.Column>
        </Flex>
      </motion.div>

      <NavItem
        iconName="cashier"
        Label="Cashier"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
        justifyContent={justifyContent}
      />
      <NavItem
        iconName="vault"
        Label="Vault"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
        justifyContent={justifyContent}
      />
      <NavItem
        iconName="promotion"
        Label="Promotion"
        Dropdown
        Animate={AnimateDropdown3}
        onClick={onClickDropdown3}
        AnimateLabel={AnimateLabel}
        AnimateDropdownArrow={AnimateDropdownArrow}
        Size={Size}
        Height={Height}
        Color={ColorNavItem3}
        backgroundColor={BackgroundColorNavItem3}
        justifyContent={justifyContent}
      />
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
          overflow: "hidden",
        }}
        animate={AnimateDropdownMenu3}
      >
        <Flex flexGrow="1">
          <div className="sidebar-divider">
            <Divider direction="vertical" />
          </div>
          <Flex.Column flexGrow="1">
            <NavItem
              iconName="heart"
              Label="$100,000 Anniv..."
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Las Vegas Anni..."
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="$10,000 Hacks..."
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="730x Closest M..."
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="$2000 Points R..."
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="$1000 Daily Wa..."
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="$1000 Daily Wa..."
              height="16px"
              width="16px"
            />
            <NavItem
              iconName="heart"
              Label="Beat Viktor Mul..."
              height="16px"
              width="16px"
            />
          </Flex.Column>
        </Flex>
      </motion.div>

      <NavItem
        iconName="vip"
        Label="VIP"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
        justifyContent={justifyContent}
      />
      <NavItem
        iconName="anniversary"
        Label="Anniversary"
        AnimateLabel={AnimateLabel}
        Size={Size}
        Height={Height}
        justifyContent={justifyContent}
      />
    </Box>

  );
};

// add for dropdown button a 'active' state

export default Sidebar;
