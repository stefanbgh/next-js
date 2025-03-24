import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Article",
	description: "The list of articles",
};

export default function ArticleLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			{children}
			{modal}
			<Footer />
		</div>
	);
}
