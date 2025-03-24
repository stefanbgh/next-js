import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export default function Card({ children }: IProps) {
	return (
		<section className="py-4 px-6 rounded-md border border-gray-300 w-fit">
			{children}
		</section>
	);
}
