"use client";

import { useRouter } from "next/navigation";

export default function Comment() {
	const router = useRouter();

	const handleRoute = (commentId: number) => {
		router.push(`/post/comment/${commentId}`);
	};

	return (
		<section>
			<h2>Comment</h2>
			<ul>
				<li className="flex items-center gap-3 border py-4 px-6 w-fit mb-2">
					<p>Comment 1</p>
					<button onClick={() => handleRoute(1)}>View more</button>
				</li>
				<li className="flex items-center gap-3 border py-4 px-6 w-fit mb-2">
					<p>Comment 2</p>
					<button onClick={() => handleRoute(2)}>View more</button>
				</li>
				<li className="flex items-center gap-3 border py-4 px-6 w-fit">
					<p>Comment 3</p>
					<button onClick={() => handleRoute(3)}>View more</button>
				</li>
			</ul>
		</section>
	);
}
