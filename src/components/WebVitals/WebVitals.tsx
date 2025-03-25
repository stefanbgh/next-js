"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
	useReportWebVitals((metric) => {
		switch (metric.name) {
			case "FCP": {
				console.log("First Contentful Paint: ", metric.value);
			}
			case "LCP": {
				console.log("Largest Contentful Paint: ", metric.value);
			}
			case "CLS": {
				console.log("Cumulative Layout Shift: ", metric.value);
			}
			default:
				break;
		}
	});

	return <></>;
}
