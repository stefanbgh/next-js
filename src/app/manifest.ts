import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Next.js App",
		short_name: "Next.js App",
		description: "Next.js App",
		start_url: "/",
		icons: [
			{
				src: "/favicon.ico",
				type: "image/x-icon",
			},
		],
	};
}
