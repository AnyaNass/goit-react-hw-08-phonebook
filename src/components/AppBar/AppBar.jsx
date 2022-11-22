import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu"
import { Header, HeaderWrap } from "./AppBar.styled";
import { Container } from "components/Container/Container";

export const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return <Header>
		<Container>
			<HeaderWrap>
				<Logo />
				{isLoggedIn ? <UserMenu /> : <Navigation />}
			</HeaderWrap>
		</Container>
	</Header>
}