// This component handles the navigation

import React from 'react';
import { Link } from 'gatsby';

const Nav = ({siteTitle}) => (
  <div className="nav">
    <header className="navHeader">
        <ul className="navList">
          <li><Link to="/" className="siteTitle">{siteTitle}</Link></li>
          <li className="links"><Link to="/about">About</Link></li>
          <li className="links"><Link to="/contact">Contact</Link></li>
          <li className="links"><Link to="/blog">Blog</Link></li>
        </ul>
    </header>
  </div>
)

export default Nav;