"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface IProps {
	error: Error;
	reset: () => void;
}

export default function ErrorBoundary({ error, reset }: IProps) {
	const router = useRouter();

	const handleReload = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};

	return (
		<section>
			<h2>{error.message}</h2>
			<button onClick={handleReload}>Try again.</button>
		</section>
	);
}
