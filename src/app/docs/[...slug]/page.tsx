interface IProps {
	params: Promise<{ slug: string[] }>;
}

export default async function SlugDocs({ params }: IProps) {
	const { slug } = await params;

	if (slug.length > 0) {
		return (
			<section>
				<h2>Slug Docs</h2>
				<p>
					{slug.map((s, i) => (
						<span key={i}>/{s}</span>
					))}
				</p>
			</section>
		);
	}

	return (
		<section>
			<h2>Slug Docs</h2>
			<p>No slug provided</p>
		</section>
	);
}
