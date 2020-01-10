import React, { Component } from 'react'

class ReadMore extends Component {
    render() {
        return (
            <div>
                <button><a href={this.props.more}>Read Full Article</a></button>
            </div>
        )
    }
}

export default ReadMore
