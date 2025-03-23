import { notFound } from "next/navigation";

interface IProps {
	params: Promise<{ postId: string }>;
}

export default async function SinglePost({ params }: IProps) {
	const id = (await params).postId;
	const postId = parseInt(id);

	if (postId > 3 || isNaN(postId)) {
		return notFound();
	}

	return (
		<section>
			<h2>Post {postId}</h2>
			<p>
				<span className="font-bold">Details: </span> Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Possimus, reprehenderit!
			</p>
		</section>
	);
}
