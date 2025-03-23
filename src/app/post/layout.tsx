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
	return <div>{children}</div>;
}
