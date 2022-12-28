import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../assets/icons/index";
import { Text, SidebarItem, Button, Flex } from "../primitives/index";

const NavItem = ({
  iconName,
  Label,
  Dropdown,
  Animate,
  animateText,
  onClick,
  AnimateDropdownArrow,
  AnimateLabel,
  Size,
  Height,
  backgroundColor,
  Color,
  ButtonBackgroundColor,
  justifyContent,
  linkTo,
}) => {
  const HideNavItems = {
    open: { scale: 0, transition: { duration: 0.2 } },
    closed: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <SidebarItem
      alignItems="center"
      size={Size}
      height={Height}
      backgroundColor={backgroundColor}
      color={Color}

    >
      {/* <Link to={linkTo}> */}
      <Flex flexGrow="1" height="20px" alignItems="center" justifyContent={justifyContent}>
        <Icon name={iconName} width="18px" height="18px" />
        <motion.div animate={AnimateLabel}>
          <Text.Heading_XXS_Medium
            ml={2}
            animate={animateText}
            variants={HideNavItems}
          >
            {Label}
          </Text.Heading_XXS_Medium>
        </motion.div>
      </Flex>
      {/* </Link> */}

      {Dropdown && (
        <motion.div animate={AnimateDropdownArrow}>
          <Button.DropdownArrow
            Animate={Animate}
            onClick={onClick}
            ButtonBackgroundColor={ButtonBackgroundColor}
          />
        </motion.div>
      )}
    </SidebarItem>
  );
};

export default NavItem;
