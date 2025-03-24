"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

interface IProps {
	children: ReactNode;
}

export default function AdminTemplate({ children }: IProps) {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/settings">Settings</Link>
					</li>
				</ul>
			</nav>
			{children}
			<div>
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<span>Count: {count}</span>
			</div>
		</div>
	);
}
