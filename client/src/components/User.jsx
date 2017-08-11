import React, { Component } from 'react';
import axios from 'axios';
import CollectionList from './CollectionList';

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
      }
    }
  }

  componentWillMount(){
    console.log('mounting')
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

  render () {

    return(
      <div>
        <h3>Hello, {this.state.user.firstName}</h3>
        <CollectionList user={this.state.user}/>
      </div>
    )
  }
}

export default User;
