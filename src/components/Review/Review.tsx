import Link from "next/link";

export default async function Review() {
	await new Promise((resolve) => setTimeout(resolve, 2500));

	return (
		<ul>
			{[...new Array(3)].map((_, index) => {
				const id = index + 1;

				return (
					<li key={id}>
						<Link href={`/review/${id}`}>Review {id}</Link>
					</li>
				);
			})}
		</ul>
	);
}
