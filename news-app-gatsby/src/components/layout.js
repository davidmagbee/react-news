import { Link } from "gatsby"
import React from "react"

import Header from "./HeaderComponents/Header"

const Layout = props => (
  <div>
    <Header />
    {props.children}

  </div>
)

export default Layout


