import Link from "next/link";

export default function Login() {
	return (
		<section>
			<h2>Login</h2>
			<p>
				Don't have an account? <Link href="/register">Register</Link>
			</p>
		</section>
	);
}
