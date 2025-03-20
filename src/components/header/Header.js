import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faPhone, faWater } from "@fortawesome/free-solid-svg-icons" ;

const Header = () => {

  const [username, setUsername] = useState(null);

const[menu, setMenu] = useState(false);
const toggleMenu = () => {
  setMenu(!menu);
}

  useEffect( () => {
    const user = localStorage.getItem('username');
    if(user)  setUsername(user);
  }, []);

  const location = useLocation();
  console.log(location.pathname);

  if(location.pathname === '/loginRegister') return null;
 
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  window.location.reload();
}






  return (
<>
  <header>
  <div className="header">
    <div id="navbar navbar-expand-lg navbar-primary p-0">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-4 col-md-3 order-md-2">
            <div className="row py-3">
              <div className="col-12 col-md-2 align-content-center">
                <Link to="/">
                  <FontAwesomeIcon icon={faBuilding}  />
                  <icon className="mt-2 mt-md-0" />
                </Link>
              </div>
              <div className="d-none d-md-block col-md-10 align-content-center text-start">
                <p className="mb-0">Opening Hour</p>
                <p className="mb-0">Mon-Fri: 8:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-3 order-md-2">
            <div className="row py-3">
              <div className="col-12 col-md-2 align-content-center">
                <Link to="tel:385-997-302-172">
                  <FontAwesomeIcon icon={faPhone} />
                  <icon className="mt-2 mt-md-0" />
                </Link>
              </div>
              <div className="d-none d-md-block col-md-10 align-content-center text-start">
                <p className="mb-0">
                  <a href="Tel:385-997-302-172">Call Us</a>
                </p>
                <p className="mb-0">
                  <a href="Tel:385-997-302-172">+385-99730-2172</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-3 order-md-2">
            <div className="row py-3">
              <div className="col-12 col-md-2 align-content-center">
                <Link to="mailto:info@adriaticsailing.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <icon className="mt-2 mt-md-0" />
                </Link>
              </div>
              <div className="d-none d-md-block col-md-10 align-content-center text-start">
                <p className="mb-0">Email Us</p>
                <p className="mb-0">
                  <Link to="mailto:info@adriaticsailing.com">
                    info@adriaticsailing.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 order-md-1 navbar-brand">
            <Link to="/">
            <img
              src="/ASA/img/ASA-logo-modri.jpeg"
              width={90}
              height={90}
              className="align-left"
              alt="ASA"
            /></Link>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-primary p-1">
              <div className="container-fluid">
                <button onClick={toggleMenu}
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="/navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  
                  <span className="asa-hamburger">
                    <span className="prva" />
                    <span className="druga" />
                    <span className="treca" />
                  </span>{" "}
                  MENU
                </button>
                <div className={'collapse navbar-collapse ' + (menu ? 'show':'')}
                  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0 mb-lg-0">
                    <li className="nav-item dropdown">
                      <Link to="/charter"
                        className="nav-link dropdown-toggle">Charter
                      </Link>
                      <ul className="dropdown-menu"
                        aria-labelledby="navbarDropdown" >
                        <li>
                          <Link to="/" className="dropdown-item">
                            Luxury-crewed Yachts
                          </Link>
                        </li>
                        <li>
                          <Link to="/catamarans" className="dropdown-item">
                            Catamarans
                          </Link>
                        </li>
                        <li>
                          <Link to="/sailing" className="dropdown-item">
                           Sailing Yachts
                          </Link>
                        </li>
                        <li>
                          <Link to="/motor" className="dropdown-item">
                            Motor Yachts
                          </Link>
                        </li>
                        
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link to="/blog"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Blog
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link to="/category/3" className="dropdown-item">
                            Destinations
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/" className="dropdown-item">
                            Routes
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/" className="dropdown-item">
                            Experiences
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link to="/news"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        News
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link to="/category/" className="dropdown-item">
                            Arrivals
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/" className="dropdown-item" >
                            Brands
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/" className="dropdown-item">
                            Boat shows
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item contact">
                      <Link to ="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  {username ? (
                    <button onClick={logout} className="btn">Welcome, {username}</button>
                  ) : (
                    <Link to="/loginRegister" className="cta-quote mb-2 mb-md-0 d-inline-block btn">Log in</Link>
                  )}
                  
                 
                  
                    
                  </div>
                  <div className="nav-item dropdown search">
                    <a
                      className="nav-link dropdown-toggle dropdown-no-icon"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        {/*!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <input type="text" />
                        </li>
                    </ul>
                  </div>
                </div>
              
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</>

);
}


export default Header;
