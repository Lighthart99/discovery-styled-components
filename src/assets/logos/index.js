import React from "react";

import { Chips } from "./chips";

const Logo = (props) => {
  // eslint-disable-next-line
  switch (props.name.toLowerCase()) {
    case "chips":
      return <Chips {...props} />;
  }
};

export { Logo };