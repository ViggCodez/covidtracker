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
            activestyle={{ color: 'black' }}
          >
            Home
          </NavLink>
          <NavLink
            to="/coviddata"
            activestyle={{ color: 'black' }}
          >
            Country
          </NavLink>
          <NavLink
            to="/statewise"
            activestyle={{ color: 'black' }}
          >
            Statewise
          </NavLink>
          <NavLink
            to="/formdata"
            activestyle={{ color: 'black' }}
          >
            Form
          </NavLink>



        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;