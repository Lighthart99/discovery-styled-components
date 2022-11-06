import React from 'react'
import { Icon } from '../assets/icons/index'
import { Text, SidebarItem } from '../primitives/index'

const NavItem = ({ iconName, Label}) => {
  return (
        <SidebarItem>
          <Icon name={iconName}/>
            <Text.Heading sort="poppins-bold" Size="XXS">{Label}</Text.Heading> 
          <Icon name="chevron_down"/>
        </SidebarItem>
  );
}

export default NavItem