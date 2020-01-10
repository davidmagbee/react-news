import React, { Component } from "react"
import Article from "./Article"

const url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=6ad3a5693c1948fc80c91b0ccaf18ea9"

class NewsApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      headlines: [],
    }
  }

  componentDidMount() {
    this.newHeadline()
  }

  newHeadline = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          headlines: res,
        })
      })
  }

  render() {
    return (
      <div className="container">
        <div>
          <Article news={this.state.headlines} />
        </div>
      </div>
    )
  }
}

export default NewsApp
