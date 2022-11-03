import styled from "styled-components";

export const ErrorContainer = styled.div`
	position: fixed;
	top: 25%;
	left: 20px;
	padding: 20px 5px;
	max-width: 195px;
	color: #fff;
	background-color: #000;
	border-bottom: 1px solid red;
	border-radius: 8px;

	animation-name: increase;
	animation-duration: 3000ms;
	animation-timing-function: linear;
	animation-fill-mode: forwards;
	animation-iteration-count: 1;

	@keyframes increase {
		0%{
			transform: translateX(-100%);
		}
		10%{
			transform: translateX(-50%);
		}
		20%{
			transform: translateX(0%);
		}
		30%{
			transform: translateX(0%);
		}
		40%{
			transform: translateX(0%);
		}
		50%{
			transform: translateX(0%);
		}
		60%{
			transform: translateX(0%);
		}
		70%{
			transform: translateX(0%);
		}
		80%{
			transform: translateX(-50%);
		}
		90%{
			transform: translateX(-100%);
		}
		100%{
			transform: translateX(-150%);
		}
	}
`

