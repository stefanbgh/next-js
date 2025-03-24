import { type NextRequest } from "next/server";
import { transactions } from "./data";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const limit = searchParams.get("limit");

	const filteredTransactions = limit
		? transactions.slice(0, parseInt(limit))
		: transactions;

	return Response.json(filteredTransactions);
}
