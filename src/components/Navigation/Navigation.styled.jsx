import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
	display: flex;
	gap: 12px;
`

export const NavItemLink = styled(NavLink)`
	position: relative;
	color: #fff;
	text-decoration: none;
	font-size: 24px;
	font-weight: 700;

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
`