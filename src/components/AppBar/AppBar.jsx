import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu"
import { Header, } from "./AppBar.styled"

export const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return <Header>
		<Logo />
		{isLoggedIn ? <UserMenu /> : <Navigation />}
	</Header>
}