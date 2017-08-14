import React, { Component } from 'react'
import { StyledRecord } from "../styles/Main"

class Record extends Component {
  _RemoveRecord = () => {
    console.log('removing record' + this.props.record._id)
    this.props.deleteRecord(this.props.record._id)

  }
  render () {
    return (
      <StyledRecord>
        <div>
          <img src={this.props.record.image} alt=""/>
        </div>
        <div>
            <h3>{this.props.record.name}</h3>
            <h4>By: {this.props.record.artist}</h4>
            <h4>Release Year: {this.props.record.year}</h4>
        </div>
        <div>
          <button onClick={this._RemoveRecord}>Remove Record</button>
        </div>
      </StyledRecord>
    )
  }
}

export default Record;
