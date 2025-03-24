import Link from "next/link";

export default function SignIn() {
	return (
		<section>
			<h2>Please, sign in</h2>
			<Link href="/login">Login</Link>
		</section>
	);
}
