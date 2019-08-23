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
	let currentYear;
	beforeEach(() => {
		currentMonth = new Date().getMonth();
		currentYear = new Date().getFullYear();
	});
	it("Loads the component", () => {
		const { getByTestId } = render(<EventCalendar />);
		const calendarComponent = getByTestId("component-calendar");
	});
	it("Loads the current month's calendar", () => {
		const { container } = render(<EventCalendar />);
		const month = container.querySelector(".react-calendar__navigation__label")
			.firstChild.nodeValue;

		expect(month).toBe(MONTHS[currentMonth] + " " + currentYear);
	});
	it("Navigates through calendar months", () => {
		let monthYear;
		const { container } = render(<EventCalendar />);
		const getLastMonth = container.querySelector(
			".react-calendar__navigation__prev-button"
		).firstChild;

		const getNextMonth = container.querySelector(
			".react-calendar__navigation__next-button"
		).firstChild;

		console.log(getLastMonth);

		const nextMonth = MONTHS[currentMonth + 1];
		const lastMonth = MONTHS[currentMonth - 1];

		fireEvent.click(getNextMonth);

		monthYear = container.querySelector(".react-calendar__navigation__label")
			.firstChild.nodeValue;

		expect(monthYear).toBe(nextMonth + " " + currentYear);

		fireEvent.click(getLastMonth);
		fireEvent.click(getLastMonth);

		monthYear = container.querySelector(".react-calendar__navigation__label")
			.firstChild.nodeValue;

		expect(monthYear).toBe(lastMonth + " " + currentYear);
	});
});

describe("EventCalendar functionality", () => {
	it("Loads content from the server", () => {});
	if (("Displays appropriate event count on event day", () => {}))
		it("Opens an event when you click on the event", () => {});
});
