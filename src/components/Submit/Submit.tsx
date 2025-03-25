"use client";

import { useFormStatus } from "react-dom";

export default function Submit() {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending}>
			{pending ? "Please wait..." : "Submit"}
		</button>
	);
}
