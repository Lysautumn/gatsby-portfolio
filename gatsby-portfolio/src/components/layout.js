import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import "./layout.css"

const Layout = ({ children }) => (
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
      <>
        
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        {/* <Nav siteTitle={data.site.siteMetadata.title} /> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
