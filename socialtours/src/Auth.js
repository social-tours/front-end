/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

import { REDIRECT_URI } from "./config/api";

const LOGIN_SUCCESS_PAGE = "/protected";
const LOGIN_FAILURE_PAGE = "/";
const auth0Settings = {
	domain: "dev-r8zrga7p.auth0.com",
	clientID: "mKqnZoQovxuLSlTUSIwjj4bcuMOH3aX1",
	responseType: "token id_token",
	scope: "openid profile email"
};

export default class Auth {
	auth0 = new auth0.WebAuth({
		...auth0Settings
	});

	constructor() {
		this.login = this.login.bind(this);
	}

	login(credentials) {
		this.auth0.redirect.loginWithCredentials({
			connection: "Username-Password-Authentication",
			username: credentials.email,
			password: credentials.password,
			redirectUri: `${REDIRECT_URI}/callback`,
			audience: "http://localhost:8080"
		});
	}

	/**
	 * Method to execute user registration
	 * through social media login
	 * @returns invoke page redirect to
	 * registration callback
	 */
	loginWithGoogle = async e => {
		e.preventDefault();
		await this.auth0.authorize(
			{
				connection: "google-oauth2",
				redirectUri: `${REDIRECT_URI}/register/callback`
			},
			async err => {
				if (err) throw err;
			}
		);
	};

	/**
	 * Method to handle post Auth0 authentication
	 * activities for user login
	 * @param {string} path
	 */
	handleAuthentication(path = LOGIN_SUCCESS_PAGE) {
		this.auth0.parseHash((err, authResults) => {
			if (authResults && authResults.accessToken && authResults.idToken) {
				this.storeAuth0Token(authResults);
				location.hash = "";
				location.pathname = path;
			} else if (err) {
				location.pathname = LOGIN_FAILURE_PAGE;
				console.error(err);
			}
		});
	}

	/**
	 * Method to handle post Auth0 authentication
	 * activities for new user registration
	 */
	handleRegistration = cb => {
		this.auth0.parseHash((err, authResults) => {
			if (authResults && authResults.accessToken && authResults.idToken) {
				this.storeAuth0Token(authResults);
				location.hash = "";

				const { email, given_name, family_name } = this.getProfile();
				const newUser = {
					email,
					password: "Placeholder-password",
					first_name: given_name,
					last_name: family_name,
					auth0_token: localStorage.getItem("access_token")
				};
				console.log("NEW SOCIAL MEDIA USER: ", newUser);
				cb(newUser);
			} else if (err) {
				//location.pathname = LOGIN_FAILURE_PAGE;
				console.error(err);
			}
		});
	};

	isAuthenticated() {
		let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
		return new Date().getTime() < expiresAt;
	}

	logout() {
		localStorage.removeItem("access_token");
		localStorage.removeItem("id_token");
		localStorage.removeItem("expires_at");
		location.pathname = LOGIN_FAILURE_PAGE;
	}

	storeAuth0Token(token) {
		let expiresAt = JSON.stringify(
			token.expiresIn * 1000 + new Date().getTime()
		);

		localStorage.setItem("access_token", token.accessToken);
		localStorage.setItem("id_token", token.idToken);
		localStorage.setItem("expires_at", expiresAt);
	}

	getProfile() {
		if (localStorage.getItem("id_token")) {
			return jwtDecode(localStorage.getItem("id_token"));
		} else {
			return {};
		}
	}
}
