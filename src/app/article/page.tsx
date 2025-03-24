import Link from "next/link";

export default function Article() {
	return (
		<section>
			<h2>Articles</h2>
			<p className="mb-4">The list of articles</p>
			<ul className="mb-4 flex flex-col gap-4">
				<li>
					<p>Article 1</p>
					<Link href="/article/1">View details</Link>
				</li>
				<li>
					<p>Article 2</p>
					<Link href="/article/2">View details</Link>
				</li>
			</ul>
		</section>
	);
}
