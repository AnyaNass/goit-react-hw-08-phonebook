import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "redux/auth/auth-selectors";
import { logout } from 'redux/auth/auth-operations';
import { Hz } from './UserMenu.styled'

export const UserMenu = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);

	return <div>
		<Hz>{userName}</Hz>
		<button type='button' onClick={() => dispatch(logout())}>Logout</button>
		<NavLink to="/contacts">Contacts</NavLink>
	</div>
}