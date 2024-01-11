import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const auth = getAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(""); // Reset error message

		try {
			// await signInWithEmailAndPassword(auth, email, password);
			await createUserWithEmailAndPassword(auth, email, password);
			//* Sign-in successful, the onAuthStateChanged in UserContext will handle the state change

		} catch (error) {
			setError("Failed to log in"); // Set error message based on the error
			console.error(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					autoComplete="email"
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					autoComplete="current-password"
				/>
			</div>
			<button type="submit">Sign In</button>
			{error && <p>{error}</p>}
		</form>
	);
};

export default SignIn;
