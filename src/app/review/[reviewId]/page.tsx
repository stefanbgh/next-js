interface IProps {
	params: Promise<{ reviewId: string }>;
}

export async function generateStaticParams() {
	return [{ reviewId: "1" }, { reviewId: "2" }, { reviewId: "3" }];
}

export default async function SingleReview({ params }: IProps) {
	const { reviewId } = await params;

	return (
		<section>
			<h2>Review details</h2>
			<p>ID: {reviewId}</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
				iusto?
			</p>
		</section>
	);
}
