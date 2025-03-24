import Card from "@/components/Card/Card";
import Link from "next/link";

export default async function Notifications() {
	return (
		<Card>
			<h3>Archived Notifications</h3>
			<Link href="/profile">Default</Link>
		</Card>
	);
}
