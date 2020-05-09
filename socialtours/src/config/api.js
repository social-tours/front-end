let REDIRECT_URI;
let API_ENDPOINT;

// https://www.codeproject.com/Articles/1198138/Deploying-React-to-Multiple-Environments
const hostname = window && window.location && window.location.hostname;

if (hostname === "www.socialtours.io") {
	API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
	// API_ENDPOINT = "https://prod-socialtours.herokuapp.com";
	REDIRECT_URI = "https://www.socialtours.io";
} else if (hostname === "https://socialtours.netlify.com") {
	REDIRECT_URI = "https://socialtours.netlify.com";
} else if (hostname === "https://socialtours.netlify.app") {
	REDIRECT_URI = "https://socialtours.netlify.app";
} else if (hostname === "staging-a-socialtours.netlify.com") {
	API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
	// API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
} else if (hostname === "staging-a-socialtours.netlify.app") {
	API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
	// API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
	REDIRECT_URI = "https://staging-a-socialtours.netlify.app";
} else if (hostname === "staging-b-socialtours.netlify.com") {
	API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
	// API_ENDPOINT = "https://staging-b-socialtours.herokuapp.com";
	REDIRECT_URI = "https://staging-b-socialtours.netlify.com";
} else if (hostname === "staging-b-socialtours.netlify.app") {
	API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
	// API_ENDPOINT = "https://staging-b-socialtours.herokuapp.com";
	REDIRECT_URI = "https://staging-b-socialtours.netlify.app";
} else {
	API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
	// API_ENDPOINT = "http://localhost:8080";
	// REDIRECT_URI = "http://localhost:3000";
	REDIRECT_URI = "https://socialtours.netlify.app"
}

export { API_ENDPOINT, REDIRECT_URI };
