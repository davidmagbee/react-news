import React, { Component } from "react"

export class ArticleBox extends Component {
  render() {
    return (
      <div className="article-box">
        <div className="article-image">
          <img src={this.props.article.urlToImage}></img>
        </div>
        <div className="title">{this.props.article.title}</div>
        <div className="author">{this.props.article.author}</div>
        {/* <div className="news-source">
                    {this.props.article.source.name}
                </div> */}
        <div className="article-description">
          {this.props.article.description}
        </div>
        {/* This will need to be a button below
                <div>
                    {this.props.article.url}
                </div> */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
          .article-box {
            font-family: "News Cycle", sans-serif;
            height: 25em;
            width: 25em;
            border: 5px solid black;
            border-radius: 5px;
            margin: 10px;
            padding: 5px;
            display: grid;
            grid-template-rows: 3fr 1fr 1fr 1fr;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    )
  }
}

export default ArticleBox
