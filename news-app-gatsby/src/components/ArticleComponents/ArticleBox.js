import React, { Component } from 'react'

export class ArticleBox extends Component {
    render() {
        return (
            <div className="article-box">
                <div className="article-image">
                    <img src={this.props.article.urlToImage}></img>
                </div>
                <div className="title">
                    {this.props.article.title}
                </div>
                <div className="author">
                    {this.props.article.author}
                </div>
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
            </div>
        )
    }
}

export default ArticleBox
