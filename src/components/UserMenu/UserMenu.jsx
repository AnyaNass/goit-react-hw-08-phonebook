// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { selectUserName } from "redux/auth/auth-selectors";
import { logout } from 'redux/auth/auth-operations';
import { User, Nav, LogoutButton } from './UserMenu.styled'

export const UserMenu = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);

	return <Nav>
		<User>{userName}</User>
		<LogoutButton type='button' onClick={() => dispatch(logout())}><FiLogOut /></LogoutButton>
		{/* <NavLink to="/contacts">Contacts</NavLink> */}
	</Nav>
}