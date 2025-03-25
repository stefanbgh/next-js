import Link from "next/link";
import { IArticle } from "@/typescript/interfaces/IArticle";

export default async function Article() {
	const response = await fetch("http://localhost:3000/api/articles");
	const data = await response.json();

	return (
		<section>
			<h2>Articles</h2>
			<p className="mb-4">The list of articles</p>
			<ul className="mb-4 flex flex-col gap-4">
				{data.map((article: IArticle) => {
					const { id, title } = article;

					return (
						<li key={id}>
							<p>{title}</p>
							<Link href={`/article/${id}`}>View details</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
