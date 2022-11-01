import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { login } from "redux/auth/auth-operations";
import { Container } from "components/Container/Container";
import { Form, FormWrapper, FormField, FormLable, AddButton } from "./LoginPage.styled";

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

	return <Container text="Login">
		<Form onSubmit={loginFormHandler}>
			<FormWrapper>
				<FormField type="email" name="email" value={email} placeholder="Your email" onChange={handleChange} />
				<FormLable><MdOutlineAlternateEmail /></FormLable>
			</FormWrapper>

			<FormWrapper>
				<FormField type="password" name="password" value={password} placeholder="Your password" onChange={handleChange} />
				<FormLable><RiLockPasswordLine /></FormLable>
			</FormWrapper>
			<AddButton type="submit"><FiLogIn /></AddButton>
		</Form>
	</Container>
}