interface IProps {
	params: Promise<{ commentId: string }>;
}

export default async function SingleComment({ params }: IProps) {
	const { commentId } = await params;

	return (
		<article className="w-[350px]">
			<h2>Comment {commentId}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
				labore incidunt maxime sunt illum et tempore asperiores magni
				doloribus.
			</p>
		</article>
	);
}
