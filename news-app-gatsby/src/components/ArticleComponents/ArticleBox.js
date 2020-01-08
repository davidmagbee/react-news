import React, { Component } from 'react'

export class ArticleBox extends Component {
    render() {
        return (
            <div>
                <div className="author">
                    {this.props.article.author}
                </div>
                <div className="title">
                    {this.props.article.title}
                </div>
                <div className="news-source">
                    {this.props.article.source.name}
                </div>
                <div className="article-description">
                    {this.props.article.description}
                </div>
            </div>
        )
    }
}

export default ArticleBox
