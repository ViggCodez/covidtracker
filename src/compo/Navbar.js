import React from "react";
import {Logo} from "../src/assets/bg.jpg"
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
             Logo
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