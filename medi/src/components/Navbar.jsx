import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "./Footer";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>L</span>IFE
            <span>L</span>INE
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
            <Link to="/pages">Pages</Link>
            </li>
            <li>
            <Link to="/cases">Cases</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com"
                target="_Abhi">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_Abhi">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_Abhi">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;





// import React from 'react'
// import '../App.css';
// import { Link } from 'react-router-dom'
// // import { Link } from '@chakra-ui/react'
// // import { ExternalLinkIcon } from '@chakra-ui/icons'
// function Navbar() {
//   return (
//     <nav className='main-nav'>
//         <h2>LifeLine</h2>
//      <Link to="/">Home</Link>
//      <Link to="/about">AboutUs</Link>
//      <Link to="/services">Services</Link>
//      <Link to="/pages">Pages</Link>
//      <Link to="/cases">Cases</Link>
//     </nav>
//   )
// }

// export default Navbar
