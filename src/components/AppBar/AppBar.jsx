import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu"

export const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return <header>
		{isLoggedIn ? <UserMenu /> : <Navigation />}
	</header>
}