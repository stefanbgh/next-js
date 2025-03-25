import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Home from "../page";

test("Home page renders correctly", () => {
	render(<Home />);

	const headingOptions = {
		level: 1,
		name: "Welcome to the Home page!",
	};

	const heading = screen.getByRole("heading", headingOptions);

	expect(heading).toBeDefined();

	const button = screen.getByRole("button");
	expect(button.textContent).toBe("Click me");

	fireEvent.click(button);
	expect(button.textContent).toBe("Clicked!!");

	fireEvent.click(button);
	expect(button.textContent).toBe("Click me");
});
