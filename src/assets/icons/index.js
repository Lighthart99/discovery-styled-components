import React from "react";

import { Arrow_right } from "./arrow/arrow_right";
import { Arrow_up } from "./arrow/arrow_up";
import { Arrow_left } from "./arrow/arrow_left";
import { Arrow_down } from "./arrow/arrow_down";

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
  }
};

export { Icon };
