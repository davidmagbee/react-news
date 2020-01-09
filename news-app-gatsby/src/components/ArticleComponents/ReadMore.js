import React, { Component } from 'react'

class ReadMore extends Component {
    render() {
        return (
            <div>
                <button><a href={this.props.readmore}>Read Full Article</a></button>
            </div>
        )
    }
}

export default ReadMore
