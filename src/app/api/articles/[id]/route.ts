import { articles } from "../data";

interface IParams {
	params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: IParams) {
	const { id } = await params;
	const articleId = parseInt(id);

	const article = articles.find((article) => article.id === articleId);

	if (!article) {
		return Response.json(
			{ message: "The article was not found" },
			{ status: 404 }
		);
	}

	return Response.json({
		data: article,
	});
}
