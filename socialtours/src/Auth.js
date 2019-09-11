/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

import { REDIRECT_URI } from "./config/api";

const LOGIN_SUCCESS_PAGE = "/protected";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: "dev-r8zrga7p.auth0.com",
		clientID: "mKqnZoQovxuLSlTUSIwjj4bcuMOH3aX1",
		redirectUri: `${REDIRECT_URI}/register/callback`,
		audience: "http://localhost:8080",
		responseType: "token id_token",
		scope: "openid profile"
	});

	constructor() {
		this.login = this.login.bind(this);
	}

	login(credentials) {
		this.auth0.redirect.loginWithCredentials({
			connection: "Username-Password-Authentication",
			username: credentials.email,
			password: credentials.password
		});
	}

	/**
	 * Method to handle post Auth0 authentication
	 * activities for user login
	 * @param {string} path
	 */
	handleAuthentication(path = LOGIN_SUCCESS_PAGE) {
		this.auth0.parseHash((err, authResults) => {
			if (authResults && authResults.accessToken && authResults.idToken) {
				console.log(authResults.expiresAt);

				let expiresAt = JSON.stringify(
					authResults.expiresIn * 1000 + new Date().getTime()
				);
				localStorage.setItem("access_token", authResults.accessToken);
				localStorage.setItem("id_token", authResults.idToken);
				localStorage.setItem("expires_at", expiresAt);
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
				console.log(authResults.expiresAt);
				let expiresAt = JSON.stringify(
					authResults.expiresIn * 1000 + new Date().getTime()
				);
				localStorage.setItem("access_token", authResults.accessToken);
				localStorage.setItem("id_token", authResults.idToken);
				localStorage.setItem("expires_at", expiresAt);
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

	/**
	 * Method to parse Auth0 token data to
	 * display user profile information
	 */
	getProfile() {
		if (localStorage.getItem("id_token")) {
			return jwtDecode(localStorage.getItem("id_token"));
		} else {
			return {};
		}
	}
}
