import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import API_ENDPOINT from "../config/api";
import axios from "axios";

export default class Secret extends Component {
  state = {
    users: ''
  }

  componentDidMount() {

    axios
      .get(`${API_ENDPOINT}/api/users`,
        // for accessing protected endpoint later
        // {
        //   headers: {
        //     Authorization: 'Bearer ' + localStorage.getItem('access_token')
        //   },
        // }
      )

      .then(response => {
        this.setState({ users: response.data });

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <p>secret place</p>
        <p>{this.state.users.length} users in database</p>
      </div>
    )
  }
}
