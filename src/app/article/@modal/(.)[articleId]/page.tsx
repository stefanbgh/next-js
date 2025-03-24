interface IProps {
	params: Promise<{ articleId: string }>;
}

export default async function InterceptedSingleArticle({ params }: IProps) {
	const { articleId } = await params;

	return (
		<article>
			<div className="bg-black z-20 relative w-[250px] p-8">
				<h2>Article {articleId}</h2>
				<p>
					<span className="font-bold">Details: </span> Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Possimus,
					reprehenderit!
				</p>
			</div>
			<div className="absolute top-0 left-0 w-full h-screen bg-black opacity-25 z-10"></div>
		</article>
	);
}
