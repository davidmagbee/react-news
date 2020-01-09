import { Link } from "gatsby"
import React from "react"

import "../../src/index.css"

import Header from "./StaticComponents/Header"
import Footer from "./StaticComponents/Footer"

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout


