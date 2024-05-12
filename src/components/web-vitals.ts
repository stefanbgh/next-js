'use client';
 
import { FC } from "react"
import { logWebVitals } from '@/helpers/logWebVitals'
import { useReportWebVitals } from 'next/web-vitals'
 
export const WebVitals: FC = (): null => {
    useReportWebVitals((metric) => {
        const { name, value, id, delta, rating } = metric;

        switch(name) {
            case "TTFB": { logWebVitals(name, value, id, delta, rating); break; };
            case "FCP":  { logWebVitals(name, value, id, delta, rating); break; };
            case "LCP":  { logWebVitals(name, value, id, delta, rating); break; };
            case "FID":  { logWebVitals(name, value, id, delta, rating); break; };
            case "CLS":  { logWebVitals(name, value, id, delta, rating); break; };
            case "INP":  { logWebVitals(name, value, id, delta, rating); break; };
        }
    });

    return null;
};