import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
	const reqHeaders = await headers();
	const authorization = reqHeaders.get("Authorization");

	const resHeaders: Record<string, string> = {
		"Content-Type": "text/html",
	};

	if (authorization) {
		resHeaders["Authorization"] = authorization;
	}

	const message = authorization
		? "<h2>Favorite articles</h2>"
		: "<h2>Unauthorized</h2>";

	return new Response(message, {
		headers: resHeaders,
	});
}
