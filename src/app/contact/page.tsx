"use client"; // "use server"; -> default

import Desc from "@/components/Desc/Desc";
import Submit from "@/components/Submit/Submit";
import Title from "@/components/Title/Title";

export default function Contact() {
	const handleSubmit = async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<section>
			<Title title="Contact page" />
			<Desc desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, in." />
			<form
				action={handleSubmit}
				className="flex flex-col w-fit gap-2 my-4"
			>
				<input
					className="border py-1 px-3 outline-none"
					type="text"
					placeholder="First Name"
				/>
				<input
					className="border py-1 px-3 outline-none"
					type="text"
					placeholder="mail@example.rs"
				/>
				<Submit />
			</form>
		</section>
	);
}
