import { baseURL } from "@/constants/baseURL";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies, headers } from "next/headers";

export const GET = async (request: Request) => {
    const cookieStore = cookies() as ReadonlyRequestCookies;
    const { value } = cookieStore.get("token") as RequestCookie;

    const headersList = headers() as ReadonlyHeaders;
    const referer = headersList.get('referer') as string;
    
    const res = await fetch(`${baseURL}/products`, {
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `token=${value}`,
            referer,
        },
    });

    const data = await res.json();
    return Response.json({ data })
};