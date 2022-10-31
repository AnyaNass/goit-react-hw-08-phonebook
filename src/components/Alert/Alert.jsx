import PropTypes from 'prop-types';
import { ModalText } from './Alert.styled'

export const Alert = ({ text }) => {
	return <ModalText>{text}</ModalText>
}

Alert.propTypes = {
	text: PropTypes.string.isRequired,
}