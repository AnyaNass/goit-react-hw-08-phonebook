import { NavItemLink, NavList, PhoneSizeButton } from "./Navigation.styled"
import { useMedia } from "react-use"
import { FiLogIn } from "react-icons/fi";
import { MdAppRegistration } from "react-icons/md";

export const Navigation = () => {
	const isPhone = useMedia('(max-width: 549px)');

	return <nav>
		<NavList>
			<li>
				<NavItemLink to="/" end>
					{isPhone ? <PhoneSizeButton type="button"><MdAppRegistration /></PhoneSizeButton> : "Registration"}</NavItemLink>
			</li>
			<li>
				<NavItemLink to="/login">
					{isPhone ? <PhoneSizeButton type="button"><FiLogIn /></PhoneSizeButton> : "Login"}</NavItemLink>
			</li>
		</NavList>
	</nav>

}