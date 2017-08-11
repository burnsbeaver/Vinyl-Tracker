import React, { Component } from 'react';
import axios from 'axios';
import CollectionList from './CollectionList';
import ShowCollection from './ShowCollection'

class User extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        password: '',
        collections: []
      },
      collection: {
        id: '',
      },
      viewCollection: false
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId;
      axios.get(`/api/user/${id}`)
        .then((res) => {
          const newState = {...this.state}
          newState.user.id = res.data._id;
          newState.user.firstName = res.data.firstName;
          newState.user.lastName = res.data.lastName;
          newState.user.password = res.data.password;
          newState.user.collections = res.data.collections
          this.setState(newState)
        })
  }

  _handleViewCollection = (collectionId) => {
    console.log(collectionId)
    const newState = {...this.state}
    newState.viewCollection = true
    newState.collection.id = collectionId
    this.setState(newState)
  }

  render () {
    if(this.state.viewCollection) {
      console.log('view Collection Switched to true')
      return(
          <ShowCollection collectionId={this.state.collection.id}/>
        )
    } else{
    return(
      <div>
        <h3>Hello, {this.state.user.firstName}</h3>
        <CollectionList handleViewCollection={this._handleViewCollection} user={this.state.user}/>
      </div>
    )
  }
  }
}

export default User;
