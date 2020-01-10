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
        <br></br>
        This site is designed to be a resource for you to filter through the madness of the news cycle. 
        It is powered by the NewsAPI, and it is a continual work in progress. 
        If you have any requests for features, want to provide friendly, constructive feedback, or just want to say hello... please feel free to reach out to the developer. 
      </p>
      </div>
      <h1 className="about-dev">About the Developer</h1>
      <p className="about-dev">
        Hello! I'm David Magbee, a budding developer, and I'm thrilled to have the opportunity 
        to share a bit about myself with you on this website I've built using ReactJS with a Gatsby library. 
        <br></br>
        <br></br>
        I am currently enrolled in General Assembly's Software Engineering Immersive, and it's been a great experience. 
        As I continue to build up my skills and implement new languages and frameworks, this and other builds will evolve.
        I look forward to sharing all of my projects with you, and I welcome a connection to discuss new features, collaboration,
        coding tips and tricks, or just to connect and say hello. 
        </p>
      
    </Layout>
    <style>{`
      body {
        background-color: #81b9c6;
        color: #fff;
      }
      .about-app {
        font-family: "News Cycle", sans-serif;
        margin: 15px:
        max-width: 90%;
      }
      .about-dev {
        font-family: "News Cycle", sans-serif;
        margin: 15px:
    `}</style>
  </main>
)

export default AboutPage
