import { Link } from "gatsby"
import React from "react"

// import "../../src/index.css"

import Header from "./StaticComponents/Header"
import Footer from "./StaticComponents/Footer"

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
      .article-box {
        font-family: "News Cycle", sans-serif;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default Layout
