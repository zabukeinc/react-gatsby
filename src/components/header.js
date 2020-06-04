import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/logo-self-love.png")} width="30" />
      </Link>
      <Link to="/about">About</Link>
      <Link to="/compassion">Compassion</Link>
      <Link to="/workshop">Work shop</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

export default Header
