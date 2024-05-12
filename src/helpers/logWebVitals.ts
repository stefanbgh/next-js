import { webVitalsMetrics } from "@/constants/webVitalsMetrics";
import { webVitalsMetricType } from "@/ts/types/webVitalsMetricType";

export const logWebVitals: Function = (
    name: webVitalsMetricType,
    value: number, 
    id: string, 
    delta: number, 
    rating: string
): void => {
    console.log(`${webVitalsMetrics[name]} (${name}) - Value: ${value} milliseconds`);
    console.log(`ID: ${id}`);
    console.log(`Delta: ${delta}`);
    console.log(`Rating: ${rating}`);
};