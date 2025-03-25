import { Metadata } from "next";

import Desc from "@/components/Desc/Desc";
import Title from "@/components/Title/Title";

import { fetchData } from "@/utils/fetchData";
import { ILike } from "@/typescript/interfaces/ILike";
import { IShare } from "@/typescript/interfaces/IShare";

interface IProps {
	params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
	title: "History",
	description: "History of Activity",
};

export default async function History({ params }: IProps) {
	const { id } = await params;
	const userId = parseInt(id);

	const getLikes = fetchData("likes", userId);
	const getShares = fetchData("shares", userId);

	const [likes, shares] = await Promise.all([getLikes, getShares]);

	return (
		<section>
			<Title title={`History ${id}`} />
			<Desc desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, magnam!" />
			<ul className="my-4 flex flex-col gap-4">
				{likes.data.map((like: ILike) => (
					<li key={like.id}>
						<p>Like ID: {like.id}</p>
						<p>Post ID: {like.postId}</p>
					</li>
				))}
			</ul>
			<ul className="my-4 flex flex-col gap-4">
				{shares.data.map((share: IShare) => (
					<li key={share.id}>
						<p>Share ID: {share.id}</p>
						<p>Post ID: {share.postId}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
