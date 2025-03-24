import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
	image: ReactNode;
	notifications: ReactNode;
	settings: ReactNode;
}

export default function ProfileLayout({
	children,
	image,
	notifications,
	settings,
}: IProps) {
	return (
		<section>
			<section className="mb-4">{children}</section>
			<section className="flex gap-2 flex-col">
				{image}
				{notifications}
				{settings}
			</section>
		</section>
	);
}
