//DEPENDENCIES
import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//  Pages
import Home from "../../pages/home";
import About from "../../pages/about";
import Contact from "../../pages/Contact";
import GalleryCode from "../../pages/galleryCode";
import GalleryVFX from "../../pages/galleryVFX";

class Nav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        <MDBNavbar className="navbar fixed-top" color="secondary-color-dark" dark expand="md" scrolling>
            {/* Logo */}
            <MDBNavbarBrand>
                <MDBNavLink to="/home"><strong className="white-text">MB</strong></MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            {/* Left side of NavBar */}
            <MDBNavbarNav left>
                <MDBNavItem active>
                    <MDBNavLink to="/home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="contact">Contact</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    {/* Dropdown for Gallery Links */}
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span className="mr-2">Galleries</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href="gallery_code">Web Development Gallery</MDBDropdownItem>
                            <MDBDropdownItem href="gallery_vfx">VFX Gallery</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>

          {/* Right side of NavBar */}
          {/* <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav> */}

        </MDBCollapse>
      </MDBNavbar>

      {/* Switch to control conditional routing */}
      <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/gallery_code" component={GalleryCode} />
              <Route path="/gallery_vfx" component={GalleryVFX} />
              <Route path="/home" component={Home} />
              <Route exact path="/" component={Home} />
            </Switch>
    </Router>
    );
  }
}

export default Nav;