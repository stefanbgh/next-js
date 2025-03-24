interface IProps {
	params: Promise<{ articleId: string }>;
}

export default async function SingleArticle({ params }: IProps) {
	const { articleId } = await params;

	return (
		<article>
			<h2>Article {articleId}</h2>
			<p>
				<span className="font-bold">Details: </span> Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Possimus, reprehenderit!
			</p>
		</article>
	);
}
