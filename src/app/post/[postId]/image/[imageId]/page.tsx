interface IProps {
	params: Promise<{ id: string; imageId: string }>;
}

export default async function SingleImage({ params }: IProps) {
	const { id, imageId } = await params;

	return (
		<section>
			<h2>Single Image</h2>
			<p>
				Image {imageId} for post {id}
			</p>
		</section>
	);
}
