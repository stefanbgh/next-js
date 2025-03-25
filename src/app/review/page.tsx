import { Suspense } from "react";

import dynamic from "next/dynamic";

import Title from "@/components/Title/Title";
import Desc from "@/components/Desc/Desc";
import Loading from "@/components/Loading/Loading";

const Review = dynamic(() => import("@/components/Review/Review"));

export default function ReviewPage() {
	return (
		<section>
			<Title title="Reviews" />
			<Desc desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
			<Suspense fallback={<Loading />}>
				<Review />
			</Suspense>
		</section>
	);
}
