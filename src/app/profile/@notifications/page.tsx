import Card from "@/components/Card/Card";
import Link from "next/link";

export default async function Notifications() {
	const num = Math.floor(Math.random() * 10) + 1;

	if (num === 1) {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}

	return (
		<Card>
			<h3>Notifications</h3>
			<Link href="/profile/archived">Archived</Link>
		</Card>
	);
}
