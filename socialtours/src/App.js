import React, { Component } from 'react';
import './App.css';
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://staging-a-socialtours.herokuapp.com/api/users")
      .then(response => {
        this.setState({ usersData: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>
          {this.state.usersData.length}
        </p>
      </div>
    );
  }
}
export default App;
