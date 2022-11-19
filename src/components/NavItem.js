import React from "react";
import { Icon } from "../assets/icons/index";
import { Text, SidebarItem, Button, Flex } from "../primitives/index";

const NavItem = ({ iconName, Label, Dropdown, onClick }) => {
  return (
    <SidebarItem>
      <Flex alignItems="center" flexGrow="1">
        <Icon name={iconName} />
        <Text.Heading_XXS ml={2}>
          {Label}
        </Text.Heading_XXS>
      </Flex>

      {Dropdown && (
        <Button sort="secondary" size="xs" onClick={onClick}>
          <Icon name="chevron_down" />
        </Button>
      )}
    </SidebarItem>
  );
};

export default NavItem;
