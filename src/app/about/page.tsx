"use client";

import Desc from "@/components/Desc/Desc";
import Title from "@/components/Title/Title";

import { useTheme } from "@/hooks/useTheme";
import { clientSideFunction } from "@/utils/clientSideFunction";

export default function About() {
	const theme = useTheme();
	const clientResult = clientSideFunction();

	return (
		<section>
			<Title title="About page" />
			<Desc
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est
				praesentium maxime."
			/>
			<article className="my-4">
				<p>
					Theme: <span className="font-bold italic">{theme}</span>
				</p>
			</article>
			<p>fn: {clientResult}</p>
		</section>
	);
}
