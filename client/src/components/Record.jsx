import React, { Component } from 'react'

class Record extends Component {
  _RemoveRecord = () => {
    console.log('removing record' + this.props.record._id)
    this.props.deleteRecord(this.props.record._id)

  }
  render () {
    return (
      <div>
      <img src={this.props.record.image} alt=""/>
      <li>
        <h5>{this.props.record.name}</h5>
        <h6>By: {this.props.record.artist}</h6>
        <button onClick={this._RemoveRecord}>Remove Record</button>
      </li>
      </div>
    )
  }
}

export default Record;
