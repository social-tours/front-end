/**
 * Integration tests for the testComponent to verify libraries installed correctly
 * and behaving as expected
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TestComponent from "../components/TestComponent";

describe("Example tests to verify integration testing works", () => {
	it("renders the test component", () => {
		const { getByTestId } = render(<TestComponent />);
		const testComponent = getByTestId("test-component");
	});
	it("loads the default message", () => {
		const { getByTestId } = render(<TestComponent />);
		const h1Area = getByTestId("h1-area");

		expect(h1Area).toHaveTextContent("default");
	});
	it("changes the message when the button is clicked", () => {
		const { getByTestId, getByText } = render(<TestComponent />);
		const h1Area = getByTestId("h1-area");
		const changeMessageButton = getByText("Change Message");

		fireEvent.click(changeMessageButton);

		expect(h1Area).toHaveTextContent("test message");
	});
});
