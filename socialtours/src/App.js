import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchEvents } from './actions/index.js';

import "./App.css";
import Login from "./components/Login";
import EventDetails from './components/updateDeleteEvent.js';

// import Calendar from "./components/EventCalendar";
//import API_ENDPOINT from "./config/api";
const API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: []
        };
    }

    componentDidMount() {
        this.props.fetchEvents()
        axios
            .get(`${API_ENDPOINT}/api/users`)

            .then(response => {
                this.setState({ usersData: response.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Router>
                <div>
                    <p>{this.state.usersData.length} users in database</p>
                    <Route path="/login" component={Login} />
                    {/* <Route path="/calendar" component={Calendar} /> */}
                    <Route path="/eventDetails" component={EventDetails} />

                </div>
            </Router>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return (state)
}
export default connect(mapStateToProps, { fetchEvents })(App);