import React from "react";
import { getByTestId, getByText } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";

import EventCalendar from "../components/EventCalendar";

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

describe("EventCalendar display", () => {
	let currentMonth;
	beforeEach(() => {
		currentMonth = new Date().getMonth();
	});
	it("Loads the component", () => {
		const { getByTestId } = render(<EventCalendar />);
		const calendarComponent = getByTestId("component-calendar");
	});
	it("Loads the current month's calendar", () => {
		const { getByText } = render(<EventCalendar />);
		getByText(MONTHS[currentMonth]);
	});
	it("Navigates through calendar months", () => {
		const { getByText } = render(<EventCalendar />);
		const getNextMonth = getByText(">");
		const getLastMonth = getByText("<");
		const nextMonth = MONTHS[currentMonth + 1];
		const lastMonth = MONTHS[currentMonth - 1];

		fireEvent.click(getNextMonth);
		getByText(nextMonth);

		fireEvent.click(getLastMonth);
		fireEvent.click(getLastMonth);
		getByText(lastMonth);
	});
});

describe("EventCalendar functionality", () => {
	it("Loads content from the server", () => {});
	if (("Displays appropriate event count on event day", () => {}))
		it("Opens an event when you click on the event", () => {});
});
