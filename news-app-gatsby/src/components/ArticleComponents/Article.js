import React, { Component } from "react"

import ArticleBox from "./ArticleBox"

export class Article extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let articles = []
    if (this.props.news.articles) {
      articles = this.props.news.articles.map(article => {
        return <ArticleBox article={article} />
      })
    }

    return (
        <div className="container">
            {articles}
            <style>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
  }
}

export default Article
