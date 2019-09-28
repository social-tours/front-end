import jwt_decode from "jwt-decode";

function userHasEvent(events) {
	if (localStorage.getItem("api_token")) {
		let userId = jwt_decode(localStorage.getItem("api_token")).id;
		let userEvents = events.filter(e => e.host_id === userId);

		// 0 is falsy
		return userEvents.length;
	}

	// for now, if no token found let them access the page
	return true;
}

export { userHasEvent };
