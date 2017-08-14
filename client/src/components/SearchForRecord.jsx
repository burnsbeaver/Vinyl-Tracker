import React, { Component } from 'react'
import axios from 'axios';
import ApiResults from './ApiResults'

class SearchForRecord extends Component {
  constructor() {
    super();
    this.state = {
      discogsResults: {
        record: []
      },
      search: false,
      itemToSearch: ''
      }
    }

  _handleSearchChange = event => {
    const attributeValue = event.target.value;
    this.setState({itemToSearch: attributeValue})
  }
  _handleSearch = (e) => {
    e.preventDefault()

    axios.get(`https://api.discogs.com/database/search?release_title=${this.state.itemToSearch}&format=vinyl&token=noWyHurwtFCYPOfUkUbcJUlrPiAyUwLbraYYHITN`)
      .then((res) => {
        const newState = {...this.state}
        newState.discogsResults.record = res.data.results.map((result, i) => {
          return result
        })
        newState.search = true
        this.setState(newState)
      })
   }

  render () {
    const ImgComponent = this.state.discogsResults.record.map((record, i) => {
      return <ApiResults key={i} record={record} />
      })
    return (
      <div>
        <form onSubmit={this._handleSearch}>
          <input type="text"  onChange={this._handleSearchChange}
              value={this.state.itemToSearch} name="itemToSearch" placeholder="Search for Record" />
          <input type="submit" value="Search for record" />
        </form>
        {ImgComponent}
      </div>
    )
  }
}

export default SearchForRecord;
