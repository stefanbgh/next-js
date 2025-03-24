import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(req: NextRequest) {
	const reqHeaders = await headers();
	const authorization = reqHeaders.get("Authorization");

	const resHeaders: Record<string, string> = {
		"Content-Type": "text/html",
		"Set-Cookie": "theme=dark",
	};

	// const cookie = await cookies();
	// cookie.set("theme", "light");

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
