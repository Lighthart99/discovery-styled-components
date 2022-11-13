import React, { useState } from 'react'
import { NavItem } from './index'
import '../styles/global.css'

import { Divider, Flex } from '../primitives/index'
import { overflow } from 'styled-system'

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);

  const openDropdown = event => {
    setIsShown(current => !current);
  };

  return (
    <Sidebar>
        <button onClick={openDropdown}>Click</button>
        <NavItem iconName="games" Label="Casino" Dropdown onClick={openDropdown}/>
        {/* {isShown && <Flex style={{height: setIsShown ? "100%" : "0%", overflow: setIsShown? "hidden" : "visible"  }}></Flex> */}
        {isShown && <Flex>
          <div className='sidebar-divider'>
            <Divider direction="vertical"/>
          </div>
          <div>
            <NavItem iconName="heart" Label="Favorites" />
            <NavItem iconName="chips" Label="Chips Original" />
            <NavItem iconName="games" Label="New Games" />
            <NavItem iconName="sword" Label="Feature Buy-in" />
            <NavItem iconName="games" Label="Live Shows" />
            <NavItem iconName="games" Label="Roulette" />
            <NavItem iconName="games" Label="Blackjack" />
          </div>
        </Flex> }
        {isShown && <div />}

        <NavItem iconName="sports" Label="Sports" Dropdown/>
        <NavItem iconName="cashier" Label="Cashier"/>
        <NavItem iconName="vault" Label="Vault"/>
        <NavItem iconName="promotion" Label="Promotion" Dropdown/>
        <NavItem iconName="vip" Label="VIP"/>
        <NavItem iconName="anniversary" Label="Anniversary"/>
    </Sidebar>
  )
}

export default Sidebar