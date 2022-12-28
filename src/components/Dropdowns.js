import React, { useContext } from "react";
import { Flex, Dropdown, ListItem, DropdownMenu } from "../primitives/index";
import { Icon } from "../assets/icons/index";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/global.css";
import userEvent from "@testing-library/user-event";
import AuthContext from "../stores/authContext";

Dropdown.Wallet = ({
  bgColor,
  Placeholder,
  ArrowLabel,
  animateMenu,
  IconLeftName,
  menuWidth,
  ...props
}) => {
  const DropdownMenuAnimation = {
    open: { y: 10, opacity: 1, },
    closed: { y: 0, opacity: 0 },
  };
  return (
    <Flex.Column >
      <Dropdown
        bgColor={bgColor}
        Placeholder={Placeholder}
        ArrowLabel={ArrowLabel}
        IconLeft
        IconLeftName={IconLeftName}
        {...props}
      >
        <motion.div animate={animateMenu} initial={{opacity: 0 }} variants={DropdownMenuAnimation}>
          <DropdownMenu width={menuWidth}>
            <ListItem value="BTC" IconLeft IconLeftName="btc">0,00 BTC</ListItem>
            <ListItem value="ETH" IconLeft IconLeftName="eth">0,00 ETH</ListItem>
            <ListItem value="USDT" IconLeft IconLeftName="usdt">0,00 USDT</ListItem>
            <ListItem value="BUSD" IconLeft IconLeftName="busd">0,00 BUSD</ListItem>
            <ListItem value="BNB" IconLeft IconLeftName="bnb">0,00 BNB</ListItem>
            <ListItem value="TRX" IconLeft IconLeftName="trx">0,00 TRX</ListItem>
            <ListItem value="TRX" IconLeft IconLeftName="usdc">0,00 USDC</ListItem>
          </DropdownMenu>
        </motion.div>
      </Dropdown>
    </Flex.Column>
  );
};

Dropdown.Username = ({
  bgColor,
  Placeholder,
  onClickLogout,
  onClickArrow,
  animateMenu,
  animateIcon,
  menuWidth,
  ...props
}) => {
  const DropdownMenuAnimation = {
    open: { y: 10, opacity: 1, display: "block", },
    closed: { y: 0, opacity: 0, display: "none",},
  };

  // const DropdownMenuAnimation = {
  //   hidden: {
  //     y: "80px",
  //     opacity: 0,
  //     display: "none",
  //   },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     scale: 1,
  //     display: "block",
  //   },
  //   exit: {
  //     scale: 0.95,
  //     opacity: 0,
  //     display: "none",
  //   },
  // };
  return (
    <Flex.Column>
      <Dropdown
        bgColor={bgColor}
        Placeholder={Placeholder}
        onClickArrow={onClickArrow}
        animateIcon={animateIcon}
        {...props}
      >
          <motion.div animate={animateMenu} initial={{opacity: 0 }} variants={DropdownMenuAnimation}>
            <DropdownMenu width={menuWidth}>
              <ListItem value="Profile" IconLeft IconLeftName="games">Profile</ListItem>
              <ListItem value="Rewards" IconLeft IconLeftName="games">Rewards</ListItem>
              <ListItem value="Affiliate" IconLeft IconLeftName="games">Affiliate</ListItem>
              <ListItem value="History" IconLeft IconLeftName="games">History</ListItem>
              <ListItem value="Settings" IconLeft IconLeftName="games">Settings</ListItem>
              <ListItem value="Logout" IconLeft IconLeftName="games" onClick={onClickLogout} color="Red">
                Logout
              </ListItem>
            </DropdownMenu>
          </motion.div>
      </Dropdown>
    </Flex.Column>
  );
};

export default Dropdown;
