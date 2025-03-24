import Search from "@/components/Search/Search";
import Link from "next/link";

export default async function Post({
	searchParams,
}: {
	searchParams: Promise<URLSearchParams>;
}) {
	const query = await searchParams;

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<section>
			<h2>Post</h2>
			<Search query={query} />
			<ul>
				<li className="border py-4 px-6 w-fit mb-2">
					<p>Post 1</p>
					<Link href="/post/1">View more</Link>
				</li>
				<li className="border py-4 px-6 w-fit mb-2">
					<p>Post 2</p>
					<Link href="/post/2">View more</Link>
				</li>
				<li className="border py-4 px-6 w-fit">
					<p>Post 3</p>
					<Link href="/post/3" replace>
						View more
					</Link>
				</li>
			</ul>
		</section>
	);
}
