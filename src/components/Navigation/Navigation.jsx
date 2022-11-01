import { NavItemLink, NavList } from "./Navigation.styled"

export const Navigation = () => {
	return <nav>
		<NavList>
			<li>
				<NavItemLink to="/" end>Registration</NavItemLink>
			</li>
			<li>
				<NavItemLink to="/login">Login</NavItemLink>
			</li>
		</NavList>
	</nav>
}