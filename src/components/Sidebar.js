import React, { useState } from 'react'
import { NavItem } from './index'
import '../styles/global.css'
import { Divider, Flex, Box } from '../primitives/index'

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const openDropdown = event => {
    setIsShown(current => !current);
  };

  const openDropdown2 = event => {
    setIsShown2(current => !current);
  };

  const openDropdown3 = event => {
    setIsShown3(current => !current);
  };

  return (
    <div className='sidebar'>
        <NavItem iconName="games" Label="Casino" Dropdown onClick={openDropdown}/>
        {isShown && <Flex.Row flexGrow="1">
          <div className='sidebar-divider'>
            <Divider direction="vertical"/>
          </div>
          <Flex.Column flexGrow="1">
            <NavItem iconName="heart" Label="Favorites" />
            <NavItem iconName="chips" Label="Chips Original" />
            <NavItem iconName="games" Label="New Games" />
            <NavItem iconName="sword" Label="Feature Buy-in" />
            <NavItem iconName="games" Label="Live Shows" />
            <NavItem iconName="games" Label="Roulette" />
            <NavItem iconName="games" Label="Blackjack" />
          </Flex.Column>
        </Flex.Row> }
        {isShown && <div />}

        <NavItem iconName="sports" Label="Sports" Dropdown onClick={openDropdown2}/>
        {isShown2 && <Flex flexGrow="1">
            <Divider direction="vertical"/>
          <Flex.Column flexGrow="1">
            <NavItem iconName="heart" Label="My Bets" />
            <NavItem iconName="heart" Label="Favorites" />
            <NavItem iconName="heart" Label="Live" />
            <NavItem iconName="heart" Label="American Football" />
            <NavItem iconName="heart" Label="Baseball" />
            <NavItem iconName="heart" Label="Basketball" />
            <NavItem iconName="heart" Label="Boxing" />
            <NavItem iconName="heart" Label="Esports" />
            <NavItem iconName="heart" Label="FIFA" />
            <NavItem iconName="heart" Label="Floorball" />
            <NavItem iconName="heart" Label="Futsal" />
            <NavItem iconName="heart" Label="Golf" />
            <NavItem iconName="heart" Label="Handball" />
            <NavItem iconName="heart" Label="Ice Hockey" />
          </Flex.Column>
        </Flex> }
        {isShown2 && <div />}

        <NavItem iconName="cashier" Label="Cashier"/>
        <NavItem iconName="vault" Label="Vault"/>
        <NavItem iconName="promotion" Label="Promotion" Dropdown onClick={openDropdown3}/>
        {isShown3 && <Flex>
          <div className='sidebar-divider'>
            <Divider direction="vertical"/>
          </div>
          <div>
            <NavItem iconName="heart" Label="$100,000 Anniv..." />
            <NavItem iconName="heart" Label="Las Vegas Anni..." />
            <NavItem iconName="heart" Label="$10,000 Hacks..." />
            <NavItem iconName="heart" Label="730x Closest M..." />
            <NavItem iconName="heart" Label="$2000 Points R..." />
            <NavItem iconName="heart" Label="$1000 Daily Wa..." />
            <NavItem iconName="heart" Label="$1000 Daily Wa..." />
            <NavItem iconName="heart" Label="Beat Viktor Mul..." />
          </div>
        </Flex> }
        {isShown3 && <div />}
        <NavItem iconName="vip" Label="VIP"/>
        <NavItem iconName="anniversary" Label="Anniversary"/>
    </div>
  )
}

export default Sidebar