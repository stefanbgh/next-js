"use client";

import Desc from "@/components/Desc/Desc";
import Title from "@/components/Title/Title";
import { useTheme } from "@/hooks/useTheme";

export default function About() {
	const theme = useTheme();

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
		</section>
	);
}
