import React from 'react'
import { NavItem } from './index'
import '../styles/global.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <NavItem iconName="games" Label="Casino"/>
        <NavItem iconName="sports" Label="Sports"/>
        <NavItem iconName="cashier" Label="Cashier"/>
        <NavItem iconName="vault" Label="Vault"/>
        <NavItem iconName="promotion" Label="Promotion"/>
        <NavItem iconName="vip" Label="VIP"/>
        <NavItem iconName="anniversary" Label="Anniversary"/>
    </div>
  )
}

export default Sidebar