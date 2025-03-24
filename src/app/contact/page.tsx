// "use server"; -> default

import Desc from "@/components/Desc/Desc";
import Title from "@/components/Title/Title";

export default function Contact() {
	return (
		<section>
			<Title title="Contact page" />
			<Desc desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, in." />
		</section>
	);
}
