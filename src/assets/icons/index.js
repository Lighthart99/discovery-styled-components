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

import { BNB } from "./crypto-icons/BNB";
import { BTC } from "./crypto-icons/BTC";
import { BUSD } from "./crypto-icons/BUSD";
import { ETH } from "./crypto-icons/ETH";
import { TRX } from "./crypto-icons/TRX";
import { USDC } from "./crypto-icons/USDC";
import { USDT } from "./crypto-icons/USDT";

const Icon = (props) => {
  // eslint-disable-next-line
  switch (props.name.toLowerCase()) {
    case "arrow_right":
      return (
        <ArrowRight
          className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );
    case "arrow_up":
      return (
        <ArrowUp
          className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );
    case "arrow_left":
      return (
        <ArrowLeft
          className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );
    case "arrow_down":
      return (
        <ArrowDown
          className={props.className}
          width="16"
          height="16"
          {...props}
        />
      );

    case "chevron_right":
      return (
        <ChevronRight
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );
    case "chevron_up":
      return (
        <ChevronUp
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );
    case "chevron_left":
      return (
        <ChevronLeft
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );
    case "chevron_down":
      return (
        <ChevronDown
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );

    case "anniversary":
      return <Anniversary width="20" height="20" {...props} />;
    case "cashier":
      return <Cashier width="20" height="20" {...props} />;
    case "games":
      return <Games width="20" height="20" />;
    case "promotion":
      return <Promotion width="20" height="20" {...props} />;
    case "sports":
      return <Sports width="20" height="20" {...props} />;
    case "vault":
      return <Vault width="20" height="20" {...props} />;
    case "vip":
      return <Vip width="20" height="20" {...props} />;
    case "heart":
      return <Heart width="20" height="20" {...props} />;
    case "chips":
      return <Chips width="20" height="20" {...props} />;
    case "sword":
      return <Sword width="20" height="20" {...props} />;
    case "close":
      return <Close width={props.width} height={props.height} {...props} />;
    case "notification":
      return (
        <Notification width={props.width} height={props.height} {...props} />
      );

    // replace width/height in props


      case "crypto_bnb":
      return (
        <BNB
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );
    case "crypto_btc":
      return (
        <BTC
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );
    case "crypto_busd":
      return (
        <BUSD
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );
    case "crypto_eth":
      return (
        <ETH
          className="icon"
          width={props.width}
          height={props.height}
          {...props}
        />
      );
      case "crypto_trx":
        return (
          <TRX
            className="icon"
            width={props.width}
            height={props.height}
            {...props}
          />
        );
        case "crypto_usdc":
          return (
            <USDC
              className="icon"
              width={props.width}
              height={props.height}
              {...props}
            />
          );
          case "crypto_usdt":
            return (
              <USDT
                className="icon"
                width={props.width}
                height={props.height}
                {...props}
              />
            );
  }
};

export { Icon };

// think about making height-width to size. = easier
// don't define here the sizes, isn't smart
