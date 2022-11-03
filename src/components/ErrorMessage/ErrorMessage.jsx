import PropTypes from 'prop-types';
import { ErrorContainer } from "./ErrorMessage.styled"

export const ErrorMessage = ({ text }) => {
	return <ErrorContainer>{text}</ErrorContainer>
}

ErrorMessage.propTypes = {
	text: PropTypes.string.isRequired,
}