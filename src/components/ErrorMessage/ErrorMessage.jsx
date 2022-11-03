import { ErrorContainer } from "./ErrorMessage.styled"

export const ErrorMessage = ({ text }) => {
	let message;

	if (text === "Request failed with status code 400") {
		message = "Wrong email or password"
	} else {
		message = "Something went wrong, try later."
	}

	return <ErrorContainer>{message}</ErrorContainer>
}