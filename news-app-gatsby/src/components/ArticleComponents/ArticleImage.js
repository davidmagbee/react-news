import React, { Component } from 'react'

class ArticleImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image}></img>
            </div>
        )
    }
}

export default ArticleImage
