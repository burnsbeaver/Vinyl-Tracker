import React, { Component } from 'react'

class ApiResults extends React.Component {
  _handleApiAdd = () => {
    console.log('Hit album ' + this.props.record)
  }
  render () {
    return(
      <div>
        <img src={this.props.record.thumb} />
        {console.log(this.props.record)}
        <button onClick={this._handleApiAdd}>Add this Album</button>
      </div>
    )
  }
}

export default ApiResults;
