import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle toggleClick={props.toggleClicked}>MENU</DrawerToggle>
    <div className={classes.Logo}><Logo /></div>
    <nav className={classes.DesktopOnly}><NavigationItems /></nav>
  </header>
);

export default toolbar;