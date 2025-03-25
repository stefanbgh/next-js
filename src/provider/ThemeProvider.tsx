"use client";

import { defaultTheme, ThemeContext } from "@/context/ThemeContext";
import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export default function ThemeProvider({ children }: IProps) {
	return (
		<ThemeContext.Provider value={defaultTheme}>
			{children}
		</ThemeContext.Provider>
	);
}
