// import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

// import Nav from "./nav"
// import "./layout.css"

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
        
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <Nav siteTitle={data.site.siteMetadata.title} />
//         </div>
        
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

// This component handles the layout of the app

import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Nav from '../components/nav';
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
