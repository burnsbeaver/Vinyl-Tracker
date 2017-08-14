import React, { Component } from 'react'

class ApiResults extends Component {
  _handleApiAdd = () => {
    console.log('Hit album ' + this.props.record)
  }
  render () {
    return(
      <span>
        <div>
          <img src={this.props.record.thumb} alt=""/>
        </div>
        {console.log(this.props.record)}
        <button onClick={this._handleApiAdd}>Add to {this.props.collection.name}</button>
      </span>
    )
  }
}

export default ApiResults;
