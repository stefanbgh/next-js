import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Learn more about us",
};

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
