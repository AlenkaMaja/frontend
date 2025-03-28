import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  
 
  const location = useLocation();
  console.log(location.pathname);

  if(location.pathname === '/loginRegister') return null;
  return (
    <>
    <footer>
  <div className="container">
    <div className="Footer">
      <div className="Footer-sections row">
        <div className="Footer-section col-md-3">
          <Link to="/">
          <img src="/ASA/img/ASA-logo-bijeli.jpeg" height="90" width="90" className="align-left" alt="ASA" />
          </Link>
            <h5 className="Footer-sectionTitle mt-3">Book your trip in a minute<br />
                get full Control for much longer.</h5>
        </div>
      <div className="Footer-section col-md-2">
        <h4 className="Footer-sectionTitle ms-4">Company</h4>
          <ul className="Footer-linkList">
            <li className="Footer-linkListItem">
              <Link to="/about" className="link"  target="_blank" rel="noopener">About</Link>
            </li>
            <li className="Footer-linkListItem">
              <a className="link" href="/environment" target="_blank" rel="noopener">Caring</a>
            </li>
            <li className="Footer-linkListItem">
              <a className="link" href="/" target="_blank" rel="noopener">GT</a>
            </li>
          </ul>
      </div>
      <div className="Footer-section col-md-2">
        <h4 className="Footer-sectionTitle ms-4">Information</h4>
        <ul className="Footer-linkList">
          <li className="Footer-linkListItem">
            <Link to="/faq" className="link" target="_blank" rel="noopener">Help/FAQ</Link>
          </li>
          <li className="Footer-linkListItem">
            <Link to="/weather" target="_blank" rel="noopener">Weather</Link>
          </li>
          <li className="Footer-linkListItem">
            <Link to="/ports"  target="_blank" rel="noopener">Ports</Link>
          </li>
        </ul>
      </div>
      <div className="Footer-section col-md-2">
        <h4 className="Footer-sectionTitle ms-5">More</h4>
        <ul className="Footer-linkList">
          <li className="Footer-linkListItem">
            <Link to="/exchange"  className="btn" target="_blank" rel="noopener">Exchange</Link>
          </li>
          <li className="Footer-linkListItem">
            <Link to="/shop" className="btn" target="_blank" rel="noopener">Shop</Link>
          </li>
          <li className="Footer-linkListItem">
            <Link to="/cart"><img src="/ASA/img/shopping-cart-round-svgrepo-com.svg" height={40} width={40} className="cart-icon ms-3" alt="ASA-Cart"/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="Footer-section is-appSocial col-md-3">
        <div className="Footer-subSection">
          <h4 className="Footer-sectionTitle ms-5">Discover us</h4>
          <ul className="Footer-appList">
            <li className="Footer-appListItem">
              <button id="js-veza-app_store" type="button" className="link"> 
              <Link to="https://www.youtube.com/@adriaticsailing7414" target="_blank" data-faux-anchor="true" role="link">
              <FontAwesomeIcon icon={faYoutube} />Available on YouTube
              </Link></button>
            </li>
          </ul>
        </div>         
      </div>
    </div>
  </div>
  </div>
</footer>         




<footer className="text-center">
  <div className="icons">
    <Link to="https://www.facebook.com/AdriaticSailingLtd" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
    <Link to="https://www.instagram.com/adriaticsailing/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
    <Link to="https://www.linkedin.com/in/adriaticsailing/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
  </div>

  <p>Copyright ©2024 All rights reserved </p>

</footer>
</>
      
  );
};

export default Footer;
