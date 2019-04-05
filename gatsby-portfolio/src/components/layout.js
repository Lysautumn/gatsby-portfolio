// This component handles the layout of the app

import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Nav from './nav';
import './layout.css';

const Layout = ({children}) => (
  <div className="layoutDiv">
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <Nav siteTitle={data.site.siteMetadata.title}/>
          <main>{children}</main>
        </div>
      )}
    />
  </div>
)

export default Layout;
