import React, { Component } from 'react'

import ArticleBox from "./ArticleBox"

export class Article extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        let articles = this.props.news.articles.map(article => {
            return <ArticleBox article={article} />
        })
        console.log(this.props.news.articles);
        
        return (
            <div>
                {articles}
            </div>
        )
    }
}

export default Article

