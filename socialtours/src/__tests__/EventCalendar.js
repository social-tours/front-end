import React from "react";
import { getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";

import EventCalendar from "../components/EventCalendar";

describe("EventCalendar display", () => {
	it("Loads the component", () => {
		const { getByTestId } = render(<EventCalendar />);
	});
	it("Loads the current month's calendar", () => {});
	it("Navigates through calendar months", () => {});
});

describe("EventCalendar functionality", () => {
	it("Loads content from the server", () => {});
	it("Opens an event when you click on the event", () => {});
});
