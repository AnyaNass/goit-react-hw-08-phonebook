import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "redux/auth/auth-selectors";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "redux/auth/auth-operations";
import { Container } from "components/Container/Container";
import { Form, FormWrapper, FormField, FormLable, AddButton } from "./LoginPage.styled";


export const LoginPage = () => {
	const dispatch = useDispatch();
	const error = useSelector(selectError);
	const notifyError = () => toast.error("Wrong email or password", {
		position: "top-left",
		theme: "dark",
	});

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
		if (error) {
			notifyError();
			return;
		}
		setEmail('');
		setPassword('');
	}

	return <Container text="Login">
		<ToastContainer />
		<Form onSubmit={loginFormHandler}>
			<FormWrapper>
				<FormField type="email" name="email" value={email} placeholder="Your email" required onChange={handleChange} />
				<FormLable><MdOutlineAlternateEmail /></FormLable>
			</FormWrapper>

			<FormWrapper>
				<FormField type="password" name="password" value={password} placeholder="Your password" required onChange={handleChange} />
				<FormLable><RiLockPasswordLine /></FormLable>
			</FormWrapper>
			<AddButton type="submit"><FiLogIn /></AddButton>
		</Form>
	</Container>
}