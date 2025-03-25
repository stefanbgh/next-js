import { Suspense } from "react";

import Review from "@/components/Review/Review";
import Title from "@/components/Title/Title";
import Desc from "@/components/Desc/Desc";
import Loading from "@/components/Loading/Loading";

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
