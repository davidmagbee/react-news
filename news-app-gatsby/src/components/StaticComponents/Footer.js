import { Link } from "gatsby"
import React from "react"


const Footer = () => (
    <footer>
        <p>This will be a Footer.</p>
    <style>{`
      @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
      footer {
        font-family: "News Cycle", sans-serif;
        background-color: #fff;
        height: 100px;
        position: relative;
        // margin-top: -100%;
        padding-bottom: 40px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
    </footer>
)

export default Footer
