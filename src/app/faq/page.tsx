"use client";

import { useState } from "react";

import Desc from "@/components/Desc/Desc";
import Title from "@/components/Title/Title";
import { faqData } from "@/constants/faq.constant";

export default function FAQ() {
	const [isActive, setIsActive] = useState<number>(1);

	const handleActive = (num: number) => {
		setIsActive(num);
	};

	return (
		<section>
			<Title title="Frequently Asked Questions" />
			<Desc desc="Lorem ipsum dolor sit amet." />
			<ul className="my-4">
				{faqData.map((faq) => {
					const { id, question, answer } = faq;

					return (
						<li className="border w-1/2 p-2" key={id}>
							<div className="flex items-center justify-between mb-4">
								<h3>{question}</h3>
								<button onClick={() => handleActive(id)}>
									{isActive === id ? "▲" : "▼"}
								</button>
							</div>
							{isActive === id && <p>{answer}</p>}
						</li>
					);
				})}
			</ul>
		</section>
	);
}
