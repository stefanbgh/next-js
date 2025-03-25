"use client";

import { useState } from "react";

export default function Button() {
	const [isClicked, setIsClicked] = useState<boolean>(false);

	const handleClick = () => setIsClicked((ic) => !ic);

	return (
		<button onClick={handleClick}>
			{isClicked ? "Clicked!!" : "Click me"}
		</button>
	);
}
