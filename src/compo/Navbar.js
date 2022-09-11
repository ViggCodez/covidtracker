import React from "react";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLogo,
  } from './NavbarElements';

const Navbar = () => {
    return (
        <>
        
           <Nav>
            <NavLogo to="/">
             <div className="logo"></div>
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink
                  to="/coviddata"
                  activeStyle={{ color: 'black' }}
                >
                    Country
                </NavLink>
                <NavLink
                  to="/statewise"
                  activeStyle={{ color: 'black' }}
                >
                    Statewise
                </NavLink>
                <NavLink
                  to="/formdata"
                  activeStyle={{ color: 'black' }}
                >
                    Form
                </NavLink>
                
                
                
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;