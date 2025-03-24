interface IProps {
	title: string;
}

export default function Title({ title }: IProps) {
	return <h2>{title}</h2>;
}
