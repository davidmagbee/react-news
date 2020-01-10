import { Link } from "gatsby"
import React from "react"

const NavBar = () => (
  <nav>
    <Link to="/" className="link">Home</Link>
    <Link to="/About" className="link about">About Page</Link>
    <style>{`
      @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
      nav {
        display: flex;
        justify-content: space-evenly;
        margin: 0;
      }
      .header {
        background-color: #4f91a1;
        font-family: "News Cycle", sans-serif;
        color: #fff;
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
      .link {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </nav>
)

export default NavBar
