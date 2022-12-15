import React from "react";
import { Flex, Dropdown, Option } from "../primitives/index";
import { Icon } from "../assets/icons/index";
import { motion } from "framer-motion";
import "../styles/global.css";

Dropdown.Wallet = ({ bgColor, Placeholder, ...props }) => {
  return (
    <Flex.Column>
        <Dropdown bgColor={bgColor} mr={2} Placeholder={Placeholder} {...props}>
          <Option value="BTC">BTC</Option>
          <Option value="ETH">ETH</Option>
          <Option value="USDT">USDT</Option>
          <Option value="BUSD">BUSD</Option>
          <Option value="BNB">BNB</Option>
          <Option value="TRX">TRX</Option>
          <Option value="USDC">USDC</Option>
        </Dropdown>
    </Flex.Column>
  );
};

export default Dropdown;
