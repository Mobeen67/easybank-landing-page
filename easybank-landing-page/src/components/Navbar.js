import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div className="Nav-container">
            <div className="navbar">
              <div className="navbar-logo">
                 <Link to='/' className="navbar-logo">
                 <img src={logo} alt="Logo"/>
                 </Link>   
              </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                        Home
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                        About
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                        Contact
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                        Blog
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                        Careers
                        </Link>
                </li>
            </ul>
                <div className="main-btn">
                    <Link className="btn-link">
                        <button>Request Invite</button>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <img src={close} alt="close" /> : <img src={hamburger} alt="hamburger" />}
                </div>
              </div>
        </div>
    )
}

export default Navbar;