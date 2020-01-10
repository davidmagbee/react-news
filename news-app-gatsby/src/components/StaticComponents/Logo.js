import { Link } from "gatsby"
import React from "react"

const Logo = () => (
    <>
    <Link to="/"><h1 className="logo" onClick="/">Rise & Headline</h1></Link>
    {/* <h1 className="logo">Rise & Headline</h1> */}
    <style>{`
    .logo {
        color: white;
        font-size: 60px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        margin: -10px 0 -10px 0;
    }
    a {
        text-decoration: none;
    }
    `}</style>
    </>
)

export default Logo
