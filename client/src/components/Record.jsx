import React, { Component } from 'react'

class Record extends Component {
  render () {
    return (
      <div>
        <li>
          {this.props.record.name}
        </li>
      </div>
    )
  }
}

export default Record;
