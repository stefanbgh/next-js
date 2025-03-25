import { likesData } from "./data";

interface IParams {
	params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: IParams) {
	const { id } = await params;
	const userId = parseInt(id);

	const likes = likesData.filter((like) => like.userId === userId);

	if (likes.length === 0) {
		return Response.json(
			{ message: "The likes were not found" },
			{ status: 404 }
		);
	}

	return Response.json({
		data: likes,
	});
}
