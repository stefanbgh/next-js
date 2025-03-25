import Link from "next/link";

export default function Review() {
	return (
		<section>
			<h2>Reviews</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
		</section>
	);
}
