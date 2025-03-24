interface IProps {
	desc: string;
}

export default function Desc({ desc }: IProps) {
	return <p>{desc}</p>;
}
