import { TransactionStatus } from "../types/TransactionStatus";

export interface ITransaction {
	id: number;
	status: TransactionStatus;
	amount: number;
	date: string;
	description: string;
}
