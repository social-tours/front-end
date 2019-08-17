import React from 'react';
import API_ENDPOINT from '../config/api';

const axios = require('axios');

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSigningUp : false,
            isLoggedIn: false,
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            },
            response: {}
        }
    }

    render(){        
        return (
            <>
                {this.state.isLoggedIn ? <h2>Congrats! You're logged in.</h2> : <></>}
                <form style={{width: '300px', height: '200px', display: 'flex', flexDirection: 'column'}} onSubmit={this.handleSubmit}>
                    {this.state.isSigningUp ? <>
                        <input style={{width: '50%'}} name='first_name' value={this.state.user.first_name} placeholder='First Name' onChange={this.handleChange} />
                        <input style={{width: '50%'}} name='last_name' value={this.state.user.last_name} placeholder='Last Name' onChange={this.handleChange} />
                        </>
                        : <></>}
                    <input style={{width: '50%'}} name='email' value={this.state.user.email}  placeholder='Email' onChange={this.handleChange} />
                    <input style={{width: '50%'}} name='password' value={this.state.user.password} placeholder='Password' onChange={this.handleChange} />
                    {!this.state.isSigningUp ? <span style={{width: '50%', outline: '1px solid black', textAlign: 'center'}} onClick={() => this.setState({isSigningUp : !this.state.isSigningUp})}>Sign Up</span> : <></>}
                    <button style={{width: '50%'}} type='submit' value='submit' >{!this.state.isSigningUp ? 'Log In' : 'Lets do this' }</button>
                    
                </form>
            </>
        )
    }

    handleChange = event => {
        this.setState({
            user: {
              ...this.state.user,
              [event.target.name]: event.target.value
            }
          });
      }
    
    handleSubmit = event =>{
        event.preventDefault();
        if (this.state.isSigningUp){

            // if signup is invalid, do nothing
            if (this.isValidSignUp()) {
                this.signup();
            }   
        } else {            
            // if login is invalid, do nothing
            if (this.isValidLogIn()){
                this.login();
            }   
        }
      }

    isValidSignUp = () => {
        const {first_name, last_name, email, password} = this.state.user;

        if (first_name.length > 0 &&
            last_name.length > 0 &&
            email.length > 0 &&
            password.length > 0){
                return true;
        } else {
                return false;
            }
    }

    isValidLogIn= () => {
        const {email, password} = this.state.user;

        if (email.length > 0 && password.length > 0){
                return true;
        } else {
                return false;
            }
    }

    login = () => {
        const {email, password} = this.state.user;
        const user = {email, password};
        axios.post(`${API_ENDPOINT}/api/login`, user)
        .then(res => 
            this.setState({response: {...res.data}, isLoggedIn: true}))
        .catch(err => console.log(err))
            
    }

    signup = () => {
        const user = {...this.state.user};

        axios.post(`${API_ENDPOINT}/api/register`, user)
        .then(res => 
            console.log('sign up successful , do something'))
        .catch(err => console.log(err))
    }
}

export default Login;