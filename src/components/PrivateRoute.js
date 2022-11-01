import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return isLoggedIn ? Component : <Navigate to={redirectTo} />
}

PrivateRoute.propTypes = {
	component: PropTypes.object,
	redirectTo: PropTypes.string,
}