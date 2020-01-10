import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const AboutPage = () => (
  <main>
    <Layout>
      <div className="about-app">
      <h1 className="about-app">The story behind Rise & Headline</h1>
      <p className="about-app">
        In our current times where the news cycle is 24 hours long, and most of us are "connected" in some way to that cycle
        at the ring of a notification, an app icon counting what we've missed, or our incessant need to just KNOW... we need the right tools.
        <br></br>
        This site is designed to be a resource for you to filter through the madness of the news cycle and 
      </p>
      </div>
      <h1 className="about-dev">About the Developer</h1>
      <p className="about-dev">This guy...</p>
    </Layout>
    <style>{`
      body {
        background-color: #81b9c6;
        color: #fff;
      }
      .about-app {
        font-family: "News Cycle", sans-serif;
        margin: 15px:
      }
      .about-dev {
        font-family: "News Cycle", sans-serif;
        margin: 15px:
    `}</style>
  </main>
)

export default AboutPage
