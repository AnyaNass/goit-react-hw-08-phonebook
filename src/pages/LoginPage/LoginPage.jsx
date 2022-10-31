import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";

export const LoginPage = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = e => {
		switch (e.target.name) {
			case "email":
				setEmail(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;

			default: return;
		}
	}

	const loginFormHandler = e => {
		e.preventDefault();
		dispatch(login({ email, password }));
		setEmail('');
		setPassword('');
	}

	return <form onSubmit={loginFormHandler}>
		<input type="email" name="email" value={email} onChange={handleChange} />
		<input type="password" name="password" value={password} onChange={handleChange} />
		<button type="submit">Login</button>
	</form>
}