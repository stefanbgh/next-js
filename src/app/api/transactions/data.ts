import { ITransaction } from "@/typescript/interfaces/ITransaction";

export const transactions: ITransaction[] = [
	{
		id: 1,
		status: "pending",
		amount: 100,
		date: "2024-10-10",
		description: "Transaction 1",
	},
	{
		id: 2,
		status: "completed",
		amount: 200,
		date: "2024-10-11",
		description: "Transaction 2",
	},
	{
		id: 3,
		status: "pending",
		amount: 300,
		date: "2024-10-12",
		description: "Transaction 3",
	},
	{
		id: 4,
		status: "completed",
		amount: 400,
		date: "2024-10-13",
		description: "Transaction 4",
	},
	{
		id: 5,
		status: "pending",
		amount: 500,
		date: "2024-10-14",
		description: "Transaction 5",
	},
];
