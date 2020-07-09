//DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";
//COMPONENT
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img
                    className="img-logo"
                    alt="logo"
                    src="#"/>
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" className={
                            window.location.pathname === '/about'
                            ? 'nav-link active'
                            : 'nav-link'
                            }>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={
                            window.location.pathname === '/contact'
                            ? 'nav-link active'
                            : 'nav-link'
                            }>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={
                            window.location.pathname === '/gallery_code'
                            ? 'nav-link active'
                            : 'nav-link'
                            }>
                            Code Gallery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={
                            window.location.pathname === '/gallery_vfx'
                            ? 'nav-link active'
                            : 'nav-link'
                            }>
                            VFX Gallery
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;