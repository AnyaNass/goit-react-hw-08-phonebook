import styled from "styled-components";

export const EditForm = styled.form`

	@media (min-width: 550px) {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 5;
		padding: 20px 0 20px 10px;
		background-color: #000;
		display: flex;
		gap: 20px;
	}
`

export const Label = styled.label`
	position: relative;
	display: block;
	color: #000;

	svg{
		position: absolute;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
	}

	@media (min-width: 550px) {
		color: #fff;
	}
`
export const EditInput = styled.input`
	width: 100%;
	background-color: #fff;
	border: none;
	border-bottom: 2px solid #000;
	color: #000;
	font-weight: 500;
	font-size: 16px;
	outline: none;
	padding: 5px 5px 5px 30px;

	&:focus {
		border-bottom: 2px solid gray;
	}

	@media (min-width: 550px) {
		width: auto;
		background-color: #000;
		border: none;
		border-bottom: 1px solid #3f3d3d;
		color: #fff;
		font-weight: 500;
		font-size: 16px;
		outline: none;
		padding: 5px 5px 5px 30px;

		&:focus {
			border-bottom: 1px solid #fff;
		}
	}
`

export const SubmitBtn = styled.button`
	width: 50px;
	height: 50px;
	background-color: #000;
	color: #fff;
	font-weight: 900;
	font-size: 16px;
	border-radius: 50%;
	transition: transform 250ms linear;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover, :focus {
		transform: scale(1.1);
	}

	@media (min-width: 550px) {
		position: absolute;
		right: -25px;
		top: 50%;
		border: 5px solid rgb(28,27,27);
		transform: translateY(-50%) scale(1);

	:hover, :focus {
		transform: translateY(-50%) scale(1.2);
	}

	}
`

export const CloseEditFormBtn = styled.button`
	width: 50px;
	height: 50px;
	background-color: #000;
	color: #fff;
	font-weight: 900;
	font-size: 16px;
	border: 5px solid rgb(28,27,27);
	border-radius: 50%;
	transition: transform 250ms linear;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover, :focus {
		transform: scale(1.1);
	}

	@media (min-width: 550px) {
		position: absolute;
	right: -75px;
	top: 50%;
 	transform: translateY(-50%) scale(1);
	

	:hover, :focus {
		transform: translateY(-50%) scale(1.2);
	}
	}
`

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`

