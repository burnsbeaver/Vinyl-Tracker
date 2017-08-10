import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentWillMount(){
    console.log('mounting')
    const id = this.props.match.params.userId;
      axios.get(`/api/user/${id}`)
        .then((res) => {
          console.log(res)
        })
  }

  render () {
    return(
      <h3>UserInfo</h3>
    )
  }
}

export default User;
