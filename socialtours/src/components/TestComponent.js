import React, { useState } from "react";

const TestComponent = _ => {
	const [h1Message, setH1Message] = useState("default");
	return (
		<div data-testid="test-component">
			<h1 data-testid="h1-area">{h1Message}</h1>
			<button onClick={e => setH1Message("test message")}>
				Change Message
			</button>
		</div>
	);
};

export default TestComponent;
