import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Post",
	description: "The list of posts",
};

export default function PostLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
