import Card from "@/components/Card/Card";

export default async function Notifications() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<Card>
			<h3>Notifications</h3>
		</Card>
	);
}
