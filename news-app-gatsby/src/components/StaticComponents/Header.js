import { Link } from "gatsby"
import React from "react"

import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => (
  <div className="header">
    <Logo />
    <NavBar />
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
      .header {
        font-family: "News Cycle", sans-serif;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default Header
