interface IProps {
	params: Promise<{ id: string }>;
}

export default async function SinglePost({ params }: IProps) {
	const id = (await params).id;

	return (
		<section>
			<h2>Post {id}</h2>
			<p>
				<span className="font-bold">Details: </span> Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Possimus, reprehenderit!
			</p>
		</section>
	);
}
