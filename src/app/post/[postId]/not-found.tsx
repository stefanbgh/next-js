import Link from "next/link";

export default async function SinglePost404() {
	return (
		<section>
			<h2>404</h2>
			<p>This post was not found.</p>
			<Link href="/post">Go back to posts</Link>
		</section>
	);
}
