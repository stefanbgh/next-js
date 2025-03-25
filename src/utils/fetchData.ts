export const fetchData = async (pathname: string, userId: number) => {
	const response = await fetch(
		`http://localhost:3000/api/${pathname}/${userId}`
	);
	const data = await response.json();

	return data;
};
