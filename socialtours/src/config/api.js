let API_ENDPOINT;

// https://www.codeproject.com/Articles/1198138/Deploying-React-to-Multiple-Environments
const hostname = window && window.location && window.location.hostname;

if (hostname === "www.socialtours.io") {
	API_ENDPOINT = "https://prod-socialtours.herokuapp.com";
} else if (hostname === "staging-a-socialtours.netlify.com") {
	API_ENDPOINT = "https://staging-a-socialtours.herokuapp.com";
} else if (hostname === "staging-b-socialtours.netlify.com") {
	API_ENDPOINT = "https://staging-b-socialtours.herokuapp.com";
} else {
	API_ENDPOINT = "http://localhost:8080";
}

export default API_ENDPOINT;
