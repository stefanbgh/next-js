"use client";

interface IProps {
	error: Error;
}

export default function ErrorBoundary({ error }: IProps) {
	return <section>{error.message}</section>;
}
