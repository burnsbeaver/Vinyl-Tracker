import React, { Component } from 'react'
import axios from 'axios';

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
        console.log(res.data.results.length)
        console.log(res.data)
        const newState = {...this.state}
        newState.discogsResults.record = res.data.results.map((result, i) => {
          return result.thumb
        })
        newState.search = true
        this.setState(newState)
      })
   }

  render () {
    const ImgComponent = this.state.discogsResults.record.map((image, i) => {
      return <img src= {image} key={i}/>
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
