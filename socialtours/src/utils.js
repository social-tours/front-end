import jwt_decode from "jwt-decode";

function userHasEvent(events) {
	// uncomment to turn off
	// return true;

	if (localStorage.getItem("api_token")) {
		let userId = jwt_decode(localStorage.getItem("api_token")).id;
		let userEvents = events.filter(e => e.host_id === userId);

		// 0 is falsy
		return userEvents.length ? true : false;
	}
}

export { userHasEvent };
