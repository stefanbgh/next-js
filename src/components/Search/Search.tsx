interface IProps {
	query: URLSearchParams;
}

export default function Search({ query }: IProps) {
	const search = Object.keys(query).length === 0 ? "" : query;

	return (
		<section className="mt-4 mb-6">
			<input
				placeholder="Search..."
				className="outline-none border py-2 px-3 rounded-md"
			/>
			{search !== "" &&
				Object.entries(search).map(([key, value]) => (
					<p key={key}>
						{key}: {value}
					</p>
				))}
		</section>
	);
}
