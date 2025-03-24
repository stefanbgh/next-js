import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Admin dashboard",
};

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
