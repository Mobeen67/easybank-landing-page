import './Footer.css';
import logo from '../images/logof.svg'
import facebookIcon from '../images/icon-facebook.svg'
import youtubeIcon from '../images/icon-youtube.svg'
import twitterIcon from '../images/icon-twitter.svg'
import pinterestIcon from '../images/icon-pinterest.svg'
import instagramIcon from '../images/icon-instagram.svg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
        <div className="contact-Icons">
        <Link to="/">
          <img src={logo} alt="logo" className="footer-logo"></img>
        </Link>
        <Link to="/">
          <img src={facebookIcon} alt="facebook" className="Icons"></img>
        </Link>
        <Link to="/">
          <img src={youtubeIcon} alt="youtube" className="Icons"></img>
        </Link>
        <Link to="/">
          <img src={twitterIcon} alt="twitter" className="Icons"></img>
        </Link>
        <Link to="/">
          <img src={pinterestIcon} alt="pinterest" className="Icons"></img>
        </Link>
        <Link to="/">
          <img src={instagramIcon} alt="Instagram" className="Icons"></img>
        </Link>
        </div>
        <ul className="footer-list">
        <li>
          <Link to="/" className="footer-item">
                About Us
          </Link>
        </li>
        <li>
            <Link to="/" className="footer-item">
                Contact
            </Link>
        </li>
        <li>
            <Link to="/" className="footer-item">
               Blog
            </Link>
        </li>
        </ul>
        <ul className="footer-list">
        <li>
            <Link to="/" className="footer-item">
                Careers
            </Link>
        </li>
        <li>
            <Link to="/" className="footer-item">
                 Support
            </Link>
        </li>
        <li>
            <Link to="/" className="footer-item">
                Privacy Policy
            </Link>
        </li>
        </ul>
        <div class="footer-bbtnContent">
          <button className="footer-btn">Request Invite</button>
          <p className="footer-para">@ Easybank. All Rights Reserved</p>
        </div>
        </div>
    )
}

export default Footer;