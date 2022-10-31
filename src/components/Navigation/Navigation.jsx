import { NavItem } from "./Navigation.styled"

export const Navigation = () => {
	return <nav>
		<ul>
			<li>
				<NavItem to="/register">Registration</NavItem>
			</li>
			<li>
				<NavItem to="/login">Login</NavItem>
			</li>
		</ul>
	</nav>
}