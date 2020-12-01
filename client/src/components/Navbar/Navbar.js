import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/">
                    <img
                    className="nav__img"
                    to="/"
                    src="data:image/jpeg;base64,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"
                    alt="logo"
                    />
                    </Link>
                     
                    
                    
                    
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={"sass.html"}>Sass</Link></li>
                        <li><Link to="badges.html">Components</Link></li>
                        <li><Link to="collapsible.html">Javascript</Link></li>
                        <li><Link to="mobile.html">Mobile</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="sass.html">Sass</Link></li>
                <li><Link to="badges.html">Components</Link></li>
                <li><Link to="collapsible.html">Javascript</Link></li>
                <li><Link to="mobile.html">Mobile</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
