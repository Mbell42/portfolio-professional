//DEPENDENCIES
import React, { Link, Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//  Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import GalleryCode from "../../pages/GalleryCode";
import GalleryVFX from "../../pages/GalleryVFX";

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
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
            <MDBNavLink to="/"><strong className="white-text">MB</strong></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="contact">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Galleries</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="gallery_code">Code Gallery</MDBDropdownItem>
                  <MDBDropdownItem href="gallery_vfx">VFX Gallery</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
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


//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <Link className="navbar-brand" to="/">
//                 <img
//                     className="img-logo"
//                     alt="logo"
//                     src="#"/>
//             </Link>
//             <div>
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <Link to="/about" className={
//                             window.location.pathname === '/about'
//                             ? 'nav-link active'
//                             : 'nav-link'
//                             }>
//                             About
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/contact" className={
//                             window.location.pathname === '/contact'
//                             ? 'nav-link active'
//                             : 'nav-link'
//                             }>
//                             Contact
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/gallery_code" className={
//                             window.location.pathname === '/gallery_code'
//                             ? 'nav-link active'
//                             : 'nav-link'
//                             }>
//                             Code Gallery
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/gallery_vfx" className={
//                             window.location.pathname === '/gallery_vfx'
//                             ? 'nav-link active'
//                             : 'nav-link'
//                             }>
//                             VFX Gallery
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Nav;