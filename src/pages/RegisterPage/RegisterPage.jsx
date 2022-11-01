import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { Container } from "components/Container/Container";
import { register } from "redux/auth/auth-operations";
import { Form, FormWrapper, FormField, FormLable, AddButton, Text, LinkToLogin } from "./RegisterPage.styled"

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

	return <Container text="Registration">
		<Form onSubmit={registrationFormHandler}>
			<FormWrapper>
				<FormField type="text" name="name" value={name} placeholder="Your name" onChange={handleChange} />
				<FormLable><FaUserAlt /></FormLable>
			</FormWrapper>
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
		<Text>Do you already have a profile? <LinkToLogin to="/login">Let's login.</LinkToLogin></Text>
	</Container>
}