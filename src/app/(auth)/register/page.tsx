import Link from "next/link";

export default function Register() {
	return (
		<section>
			<h2>Register</h2>
			<p>
				Already have an account? <Link href="/login">Login</Link>
			</p>
		</section>
	);
}
