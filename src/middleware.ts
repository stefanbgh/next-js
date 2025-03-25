import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { nonce } from "./constants/nonce.constant";
import { cspHeaderValue } from "./constants/cspHeader.constant";

export async function middleware(req: NextRequest) {
	const cookie = await cookies();

	const token = cookie.get("token");

	if (!token) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	const requestHeaders = new Headers(req.headers);

	requestHeaders.set("x-nonce", nonce);
	requestHeaders.set("Content-Security-Policy", cspHeaderValue);

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});

	response.headers.set("Content-Security-Policy", cspHeaderValue);

	return response;
}

export const config = {
	matcher: ["/profile/:path*"],
};
