import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Toolbar} from './base'

const Header = ({ siteTitle }) => (
  <header>
  <Toolbar>

      <h1 style={{ margin: 0 }}>
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
  </Toolbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
