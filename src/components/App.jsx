import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/auth-operations";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch])

	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/contacts" element={<ContactsPage />} />
			</Route>
		</Routes>
	</>
	)
};
