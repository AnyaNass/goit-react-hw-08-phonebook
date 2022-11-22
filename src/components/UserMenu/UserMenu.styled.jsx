import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 8px;

	@media (min-width: 550px) {
		gap: 12px;
	}
`

export const User = styled.div`
	color: #fff;
	font-size: 22px;
	font-weight: 500;

	@media (min-width: 550px) {
		font-size: 24px;
		font-weight: 700;
	}
`

export const LogoutButton = styled.button`
	width: 50px;
	height: 50px;
	background-color: #000;
	color: #fff;
	font-weight: 900;
	font-size: 16px;
	border-radius: 50%;
	border: 5px solid rgb(28, 27, 27);

	transition: transform 250ms linear;

	:hover, :focus {
		transform: scale(1.2);
	}

	svg{
		vertical-align: middle;
	}
`