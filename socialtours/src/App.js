import React, { Component } from "react";
import Auth from './Auth';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Protected from "./components/Protected";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";
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
            <Router>
                <Switch>
                    <Route exact path="/" render={props => <Main {...props} auth={this.state.auth} />} />
                    <Route path="/protected" component={() => this.state.auth.isAuthenticated() ? <Protected auth={this.state.auth} /> : <NotFound />} />
                    <Route path="/callback" component={Callback} />
                    <Route component={NotFound} />
                </Switch>
                <p>{this.state.usersData.length} users in database</p>
            </Router>
        );
    }
}
export default App;
