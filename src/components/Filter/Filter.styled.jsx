import styled from 'styled-components';

export const FilterWrapper = styled.div`
	margin: 24px 0 0;
`
export const FilterField = styled.label`
	position: relative;
	display: block;
`
export const Label = styled.span`
	color: white;
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);
	z-index: 1;
	text-transform: lowercase;
	font-weight: 100;

	@media (min-width: 550px) {
		left: 50px;
	}
`
export const FilterInput = styled.input`
	width: 100%;
	background-color: #000;
	border: none;
	padding: 15px 10px 15px 50px;
	display: block;
	outline: none;
	color: #fff;
	margin: 2px 0 0;
	border-bottom: 1px solid transparent;
	border-radius: 5px;
	transition: border 250ms linear;

	:focus{
		border-bottom: 1px solid #fff;
	}

	@media (min-width: 550px) {
		padding: 15px 10px 15px 110px;
	}
`