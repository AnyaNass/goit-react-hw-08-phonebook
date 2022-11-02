import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "redux/auth/auth-operations";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { selectIsRefreshingUser } from "redux/auth/auth-selectors";
import { Layout } from "./Layout/Layout";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";


export const App = () => {
	const dispatch = useDispatch();
	const isRefreshingUser = useSelector(selectIsRefreshingUser);

	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch])


	return (<Routes>
		<Route path="/" element={<Layout />}>
			{!isRefreshingUser && <>
				<Route index element={<PublicRoute redirectTo="/contacts" component={<RegisterPage />} />} />

				<Route path="login" element={<PublicRoute redirectTo="/contacts" component={<LoginPage />} />} />

				<Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
			</>}
		</Route>
	</Routes>
	)
};
