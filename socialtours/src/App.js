import React, { Component } from "react";
import axios from "axios";
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents } from "./actions/index.js";


import "./App.css";
// import Login from "./components/Login";

import Main from "./components/Main";
import Protected from "./components/Protected";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";

import TheCrudEvent from './components/updateDeleteEvent.js'

// import Calendar from "./components/EventCalendar";
//import API_ENDPOINT from "./config/api";
const API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            auth: new Auth()
        }
    }

    componentDidMount() {
        this.props.fetchEvents();
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
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Main auth={this.state.auth} />}
                    />
                    <Route
                        path="/protected"
                        render={() =>
                            this.state.auth.isAuthenticated() ? (
                                <Protected auth={this.state.auth} />
                            ) : (
                                    <NotFound />
                                )
                        }
                    />
                    <Route path="/callback" component={Callback} />
                    <Route component={NotFound} />
                </Switch>
                <Route
                    path="/events" component={TheCrudEvent}
                />
            </Router>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return state;
};
export default connect(
    mapStateToProps,
    { fetchEvents }
)(App);
