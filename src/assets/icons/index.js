import React from "react";

import { ArrowRight } from "./arrow/arrow_right";
import { ArrowUp } from "./arrow/arrow_up";
import { ArrowLeft } from "./arrow/arrow_left";
import { ArrowDown } from "./arrow/arrow_down";

import { ChevronRight } from "./chevron/chevron_right";
import { ChevronUp } from "./chevron/chevron_up";
import { ChevronLeft } from "./chevron/chevron_left";
import { ChevronDown } from "./chevron/chevron_down";

import { Anniversary } from "./anniversary";
import { Cashier } from "./cashier";
import { Games } from "./games";
import { Promotion } from "./promotion";
import { Sports } from "./sports";
import { Vault } from "./vault";
import { Vip } from "./vip";
import { Sword } from "./sword";
import { Heart } from "./heart";
import { Chips } from "./chips";
import { Close } from "./close";
import { Notification } from "./notification";
import { Check } from "./check";

import { BNB } from "./crypto-icons/BNB";
import { BTC } from "./crypto-icons/BTC";
import { BUSD } from "./crypto-icons/BUSD";
import { ETH } from "./crypto-icons/ETH";
import { TRX } from "./crypto-icons/TRX";
import { USDC } from "./crypto-icons/USDC";
import { USDT } from "./crypto-icons/USDT";

import { rank1_level1 } from "./ranks/rank1_level1";

const Icon = (props) => {
  // eslint-disable-next-line
  switch (props.name.toLowerCase()) {
    case "arrow_right":
      return (
        <ArrowRight
          // className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );
    case "arrow_up":
      return (
        <ArrowUp
          // className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );
    case "arrow_left":
      return (
        <ArrowLeft
          // className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );
    case "arrow_down":
      return (
        <ArrowDown
          // className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );

    case "chevron_right":
      return (
        <ChevronRight width={props.width} height={props.height} {...props} />
      );
    case "chevron_up":
      return <ChevronUp width={props.width} height={props.height} {...props} />;
    case "chevron_left":
      return (
        <ChevronLeft width={props.width} height={props.height} {...props} />
      );
    case "chevron_down":
      return (
        <ChevronDown width={props.width} height={props.height} {...props} />
      );

    case "anniversary":
      return (
        <Anniversary width={props.width} height={props.height} {...props} />
      );
    case "cashier":
      return <Cashier width={props.width} height={props.height} {...props} />;
    case "games":
      return <Games width={props.width} height={props.height} {...props} />;
    case "promotion":
      return <Promotion width={props.width} height={props.height} {...props} />;
    case "sports":
      return <Sports width={props.width} height={props.height} {...props} />;
    case "vault":
      return <Vault width={props.width} height={props.height} {...props} />;
    case "vip":
      return <Vip width={props.width} height={props.height} {...props} />;
    case "heart":
      return <Heart width={props.width} height={props.height} {...props} />;
    case "chips":
      return <Chips width={props.width} height={props.height} {...props} />;
    case "sword":
      return <Sword width={props.width} height={props.height} {...props} />;
    case "close":
      return <Close width={props.width} height={props.height} {...props} />;
    case "notification":
      return (
        <Notification width={props.width} height={props.height} {...props} />
      );
    case "check":
      return <Check width={props.width} height={props.height} {...props} />;

    // replace width/height in props

    case "bnb":
      return <BNB width={props.width} height={props.height} {...props} />;
    case "btc":
      return <BTC width={props.width} height={props.height} {...props} />;
    case "busd":
      return <BUSD width={props.width} height={props.height} {...props} />;
    case "eth":
      return <ETH width={props.width} height={props.height} {...props} />;
    case "trx":
      return <TRX width={props.width} height={props.height} {...props} />;
    case "usdc":
      return <USDC width={props.width} height={props.height} {...props} />;
    case "usdt":
      return <USDT width={props.width} height={props.height} {...props} />;

    case "rank1_level1":
      return (
        <rank1_level1 width={props.width} height={props.height} {...props} />
      );
  }
};

export { Icon };

// think about making height-width to size. = easier
// don't define here the sizes, isn't smart
