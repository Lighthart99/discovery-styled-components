import React from 'react'
import { Icon } from '../assets/icons/index'
import { Text, SidebarItem, Button } from '../primitives/index'
import useState from 'react';



const NavItem = ({ iconName, Label, Dropdown, onClick }) => {
  return (
        <SidebarItem>
          <Icon name={iconName}/>
          <Text.Heading sort="poppins-bold" Size="XXS">{Label}</Text.Heading> 
          {/* <Icon name="chevron_down"/> */}

          {Dropdown && <Button sort="secondary" size="xs">
            <Icon name="chevron_down" onClick={onClick}/>
          </Button>}
          
          {/* <Button.Secondary label="test"/>  */}
          {/* this is the problem */}
        </SidebarItem>
  );
}

export default NavItem