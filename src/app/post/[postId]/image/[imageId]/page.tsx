import { notFound } from "next/navigation";

interface IProps {
	params: Promise<{ postId: string; imageId: string }>;
}

export default async function SingleImage({ params }: IProps) {
	const { postId, imageId } = await params;

	return (
		<section>
			<h2>Single Image</h2>
			<p>
				Image {imageId} for post {postId}
			</p>
		</section>
	);
}
