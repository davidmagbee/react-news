import React, { Component } from 'react'

class ArticleImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.artimg}></img>
            </div>
        )
    }
}

export default ArticleImage
