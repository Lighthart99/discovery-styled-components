import React from "react";

import { Arrow_right } from "./arrow/arrow_right";
import { Arrow_up } from "./arrow/arrow_up";
import { Arrow_left } from "./arrow/arrow_left";
import { Arrow_down } from "./arrow/arrow_down";

import { Chevron_right } from "./chevron/chevron_right";
import { Chevron_up } from "./chevron/chevron_up";
import { Chevron_left } from "./chevron/chevron_left";
import { Chevron_down } from "./chevron/chevron_down";

import { Anniversary } from "./anniversary";
import { Cashier } from "./cashier";
import { Games } from "./games";
import { Promotion } from "./promotion";
import { Sports } from "./sports";
import { Vault } from "./vault";
import { Vip } from "./vip";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "arrow_right":
      return <Arrow_right className="icon icon-right" width="16" height="16" {...props} />;
    case "arrow_up":
      return <Arrow_up className="icon" width="16" height="16" {...props} />;
    case "arrow_left":
      return <Arrow_left className="icon icon-left" width="16" height="16" {...props} />;
    case "arrow_down":
      return <Arrow_down className="icon" width="16" height="16" {...props} />;
    
    case "chevron_right":
      return <Chevron_right className="icon icon-right" width="16" height="16" {...props} />;
    case "chevron_up":
       return <Chevron_up className="icon" width="16" height="16" {...props} />;
    case "chevron_left":
       return <Chevron_left className="icon icon-left" width="16" height="16" {...props} />;
    case "chevron_down":
      return <Chevron_down className="icon" width="16" height="16" {...props} />;  
    
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
        return <Vip  width="20" height="20" {...props} />;
  }
};

export { Icon };

// think about making height-width to size. = easier
// don't define here the sizes, isn't smart