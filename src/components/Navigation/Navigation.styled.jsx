import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
	display: flex;
	gap: 8px;

	@media (min-width: 550px) {
		gap: 12px;
	}
`

export const PhoneSizeButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 45px;
	height: 45px;
	background-color: #000;
	color: #fff;
	font-weight: 900;
	font-size: 24px;
	border-radius: 50%;
	transition: transform 250ms linear;

	:hover, :focus {
		transform: scale(1.1);
	}
`

export const NavItemLink = styled(NavLink)`
	position: relative;
	color: #fff;
	text-decoration: none;
	font-size: 24px;
	font-weight: 700;

	&.active ${PhoneSizeButton} {
		border: 1px solid #fff;
	}

	@media (min-width: 550px) {
		&:hover::after{
			opacity: 1;
			width: 100%;
		}

	&::after{
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 1px;
		background-color: #fff;
		opacity: 0;
		transition: all 250ms linear;
	}

	&.active{
		&::after{
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #fff;
		opacity: 1;
	}
	}
	}
`
