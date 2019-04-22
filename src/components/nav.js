// This component handles the navigation bar

import React from 'react';
import { Link } from 'gatsby';

const Nav = ({siteTitle}) => (
  <div className="nav">
    <header className="navHeader">
        <ul className="navList">
          <li><Link to="/" className="siteTitle">{siteTitle}</Link></li>
          <li className="links"><Link className="styledLinks" activeClassName="activeLinks" to="/about">About</Link></li>
          <li className="links"><Link className="styledLinks" activeClassName="activeLinks" to="/contact">Contact</Link></li>
          <li className="links"><Link className="styledLinks" activeClassName="activeLinks" to="/blog">Blog</Link></li>
        </ul>
    </header>
  </div>
)

export default Nav;