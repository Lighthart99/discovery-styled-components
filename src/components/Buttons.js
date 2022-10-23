import React, { useEffect, useState } from "react";
import { Button, Flex, Spinner, Box } from "../primitives";
import { useWiring, store } from "../libs/wiring";
import { Inputs, Assets, Utils, Buttons } from "../components";
import { useHistory, useLocation } from "react-router-dom";

Button.Close = p => {
  return (
    <Button {...p} type="simple" p={0}>
      <Assets.Icons.Close />
    </Button>
  );
};

// this file is made for actions