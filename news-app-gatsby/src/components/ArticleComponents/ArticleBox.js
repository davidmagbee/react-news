import React, { Component } from "react"
import Description from "./Description"
import Contributor from "./Contributor"
import ArticleImage from "./ArticleImage"
import ReadMore from "./ReadMore"

class ArticleBox extends Component {
  render() {
    return (
      <div className="article-box">
        <div className="article-image">
          <ArticleImage image={this.props.article.urlToImage} />
        </div>
        <div className="title">{this.props.article.title}</div>
        <div className="author">
          <Contributor cont={this.props.article.author} />
        </div>
        <div className="article-desc">
          <Description desc={this.props.article.description} />
        </div>

        <ReadMore className="more" more={this.props.article.url} />

        <style>{`
          @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
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
            border: 5px solid #4f91a1;
            border-radius: 5px;
            margin: 10px;
            padding: 5px;
            display: grid;
            grid-template-rows: 4fr 1fr 1fr 1fr 1fr;
          }
          .article-desc {
            font-style: italic;
          }
          img {
            width: 100%;
            height: 100%;
          }
          .title {
            font-weight: bold;
          }
        `}</style>
      </div>
    )
  }
}

export default ArticleBox
