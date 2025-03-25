"use client"; // "use server"; -> default

import { useActionState, useRef } from "react";
import { initActionState } from "@/constants/initActionState.constant";
import { IInitActionState } from "@/typescript/interfaces/IInitActionState";
import { useInputRef } from "@/hooks/useInputRef";
import { getInputValue } from "@/utils/getInputValue";

import Desc from "@/components/Desc/Desc";
import Title from "@/components/Title/Title";

export default function Contact() {
	const [state, formAction, isPending] = useActionState(
		handleSubmit,
		initActionState
	);

	const firstNameRef = useInputRef();
	const emailRef = useInputRef();

	async function handleSubmit() {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const firstName = getInputValue(firstNameRef);
		const email = getInputValue(emailRef);

		const errors: IInitActionState = {};

		if (!firstName) {
			errors.firstName = "First name is required";
		}

		if (!email) {
			errors.email = "Email is required";
		}

		if (Object.keys(errors).length > 0) {
			return { err: errors, msg: "error" };
		}

		return { err: {}, msg: "success" };
	}

	return (
		<section>
			<Title title="Contact page" />
			<Desc desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, in." />
			<form
				action={formAction}
				className="flex flex-col w-fit gap-2 my-4"
			>
				<input
					className="border py-1 px-3 outline-none"
					type="text"
					placeholder="First Name"
					ref={firstNameRef}
				/>
				{state.err.firstName && (
					<p className="text-red-400 italic">{state.err.firstName}</p>
				)}
				<input
					className="border py-1 px-3 outline-none"
					type="text"
					placeholder="mail@example.rs"
					ref={emailRef}
				/>
				{state.err.email && (
					<p className="text-red-400 italic">{state.err.email}</p>
				)}
				<button disabled={isPending}>
					{isPending ? "Please wait..." : "Submit"}
				</button>
				{state.msg === "success" && (
					<p className="text-teal-500 italic">
						Successfully submitted!!
					</p>
				)}
			</form>
		</section>
	);
}
