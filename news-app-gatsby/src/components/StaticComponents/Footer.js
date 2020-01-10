import { Link } from "gatsby"
import React from "react"


const Footer = () => (
    <footer>
        <div className="contact">
        <a href="mailto:david.magbee@me.com?subject=Let's Connect">Email</a>
        <a href="https://www.linkedin.com/in/davidmagbee/">LinkedIn</a>
        <a href="https://github.com/macuser413/">GitHub</a>
        <a href="https://betterradio.airtime.pro/">Better Radio</a>
        <a href="http://www.betterfarm.org/">Better Farm</a>
        </div>
    <style>{`
      @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
      footer {
        font-family: "News Cycle", sans-serif;
        background-color: #327b8c;
        height: 120px;
        display: flex;
        flex-direction: column;
        flex: 1 0 auto;
        flex-shrink: 0;
        align-content: center;
      }
      img {
        width: 100%;
        height: 100%;
      }
      a {
        color: #0d304b;
        text-decoration: none; 
      }
      .contact {
          display: flex;
          justify-content: space-around;
          align-items: baseline;
          align-content: center;
      }
    `}</style>
    </footer>
)

export default Footer
