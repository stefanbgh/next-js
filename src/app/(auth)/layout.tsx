import Footer from "@/components/Footer/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Auth",
	description: "The authentication page",
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			{children}
			<Footer />
		</div>
	);
}
