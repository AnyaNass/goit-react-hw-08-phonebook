import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";

export const RegisterPage = () => {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = e => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;
			case "email":
				setEmail(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;

			default: return;
		}
	}

	const registrationFormHandler = e => {
		e.preventDefault();
		dispatch(register({ name, email, password }));
		setName('');
		setEmail('');
		setPassword('');
	}

	return <form onSubmit={registrationFormHandler}>
		<input type="text" name="name" value={name} onChange={handleChange} />
		<input type="email" name="email" value={email} onChange={handleChange} />
		<input type="password" name="password" value={password} onChange={handleChange} />
		<button type="submit">Registration</button>
	</form>
}