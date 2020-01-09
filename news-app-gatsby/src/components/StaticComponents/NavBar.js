import { Link } from "gatsby"
import React from "react"

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/About">About Page</Link>
    <style>{`
      @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
      nav {
        display: flex;
        justify-content: space-around;
      }
      .header {
        background-color: #4f91a1;
        font-family: "News Cycle", sans-serif;
        color: white;
        padding: 10px;
      }
      .article-box {
        font-family: "News Cycle", sans-serif;
        height: 25em;
        width: 25em;
        border: 5px solid black;
        border-radius: 5px;
        margin: 10px;
        padding: 5px;
        display: grid;
        grid-template-rows: 4fr 1fr 1fr 1fr 1fr;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </nav>
)

export default NavBar
