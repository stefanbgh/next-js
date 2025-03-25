import Desc from "@/components/Desc/Desc";
import Title from "@/components/Title/Title";
import { limit } from "@/constants/limit.constant";
import { ITransaction } from "@/typescript/interfaces/ITransaction";

export default async function Transactions() {
	const response = await fetch(
		`http://localhost:3000/api/transactions?limit=${limit}`
	);

	const data = await response.json();

	return (
		<section>
			<Title title="Transactions" />
			<Desc desc="Lorem ipsum dolor sit amet." />
			<ul className="my-4 flex flex-col gap-4">
				{data.map((transaction: ITransaction) => {
					const { id, description, date, status } = transaction;

					return (
						<li key={id}>
							<p>ID: {id}</p>
							<p>{description}</p>
							<p>{date}</p>
							<p>
								Status: <span className="italic">{status}</span>
							</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
