import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <div
    className="nav"
    style={{
      marginTop: `40px`,
      width: `20%`,
      height: `100%`,
      float: `right`,
      borderRadius: `5% 0 0 5%`,
    }}
  >
    <div
      style={{
        padding: `1.55rem`,
        height: `100%`,
        transform: `skewY(8deg)`,
      }}
    >
      <h1 style={{
        margin: 0, textAlign: `center`
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
        paddingTop: `20px`,
        listStyleType: `none`,
        color: `white`,
      }}>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  </div>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
