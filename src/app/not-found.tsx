import Link from "next/link";

export default function NotFound() {
	return (
		<section>
			<h2>404</h2>
			<p>Sorry, the page was not found.</p>
			<Link href="/">Go back to home</Link>
		</section>
	);
}
