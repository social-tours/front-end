import React, { Component } from 'react';
import "./App.css";
import axios from "axios";
import Auth from './Auth';
import Login from "./components/Login";
import API_ENDPOINT from "./config/api";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            // move to redux state later
            auth: new Auth()
        };
    }

    componentDidMount() {
        axios
            .get(`${API_ENDPOINT}/api/users`)

            .then(response => {
                this.setState({ usersData: response.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <p>{this.state.usersData.length} users in database</p>
                <Login />
            </div>
        );
    }
}
export default App;
