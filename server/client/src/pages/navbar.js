import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation" 
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current="page" href="/">
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href="/about">About</MDBNavbarLink>
            <MDBNavbarLink href="/contect">Contect Us</MDBNavbarLink>
            <MDBNavbarLink href="/login">Login</MDBNavbarLink>
            <MDBNavbarLink href="/register">Register</MDBNavbarLink>
            <MDBNavbarLink href="/logout">Logout</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
