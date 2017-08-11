import React, { Component } from 'react'

class Record extends Component {
  render () {
    return (
      <div>
        <li>
          <h5>{this.props.record.name}</h5>
          <h6>By: {this.props.record.artist}</h6>
        </li>
      </div>
    )
  }
}

export default Record;
