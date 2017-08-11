import React, { Component } from 'react'

class AddRecord extends Component {
  constructor() {
    super();
    this.state = {
      newRecord: {
        name: '',
        artist: '',
        year: ''
      }
    }
  }
  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const newRecord = { ...this.state.newRecord };
         newRecord[attributeName] = attributeValue;

         this.setState({ newRecord })
 };
  render () {
    return(
      <div>
        <h3>New Record</h3>
        <form>
          <input type="text"  onChange={this._handleChange}
              value={this.state.newRecord.name} name="name" placeholder="Record Name" />
          <input type="text" onChange={this._handleChange}
              value={this.state.newRecord.artist} name="artist" placeholder="Artist" />
          <input type="number" onChange={this._handleChange}
              value={this.state.newRecord.year} name="year" placeholder="Release Year" />
          <input type="submit" value="Add Record" />
        </form>
      </div>
    )
  }
}

export default AddRecord;
