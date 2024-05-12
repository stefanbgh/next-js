import { cspHeader } from "@/constants/csp/cspHeader";
import { nonce } from "@/constants/csp/nonce";
import { legacyPrefixes } from "@/constants/legacyPrefixes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
 
export const middleware = (request: NextRequest) => {
    const { url, nextUrl } = request;
    const newUrl = new URL("/dashboard", url);

    const { pathname } = nextUrl;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set(
        'Content-Security-Policy',
        cspHeader.replace(/\s{2,}/g, ' ').trim()
    );
 
    if (legacyPrefixes.some((prefix: string) => pathname.startsWith(prefix))) {
        return NextResponse.next({
            headers: requestHeaders,
            request: {
                headers: requestHeaders,
            },
        })
    };
 
    if (
        !pathname.endsWith("/") &&
        !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
    ) {
        nextUrl.pathname += "/";
        return NextResponse.redirect(nextUrl);
    };

    return NextResponse.redirect(newUrl);
};