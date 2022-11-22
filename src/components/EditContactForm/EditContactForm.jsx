import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMedia } from 'react-use';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { editContact, deleteContact } from "redux/contacts/contacts-operations";
import { EditForm, Label, EditInput, SubmitBtn, CloseEditFormBtn, ButtonsWrapper } from "./EditContactForm.styled"

export const EditContactForm = ({ closeEditForm, id, contactToUpdate }) => {
	const dispatch = useDispatch();
	const isPhone = useMedia('(max-width: 549px)')

	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	useEffect(() => {
		setName(contactToUpdate.name);
		setNumber(contactToUpdate.number);
	}, [contactToUpdate.name, contactToUpdate.number])

	const handleInputChange = e => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;
			case "number":
				setNumber(e.target.value);
				break;
			default: return;
		}
	}

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(editContact([id, { name, number }]))
		closeEditForm();
	}

	const handleDeleteContact = () => {
		dispatch(deleteContact(id));
		closeEditForm();
	}

	return <EditForm>
		<Label>
			<FaUserAlt />
			<EditInput type="text" name="name" value={name} onChange={handleInputChange} />
		</Label>
		<Label>
			<FaPhoneAlt />
			<EditInput type="tel" name="number" value={number} onChange={handleInputChange} />
		</Label>
		<ButtonsWrapper>
			<SubmitBtn type="submit" onClick={handleSubmit}><MdDone /></SubmitBtn>
			{isPhone ? <CloseEditFormBtn type="button" onClick={handleDeleteContact}><FaRegTrashAlt /></CloseEditFormBtn> : <CloseEditFormBtn type="button" onClick={() => closeEditForm()}><IoClose /></CloseEditFormBtn>}
		</ButtonsWrapper>
	</EditForm>
}

EditContactForm.propTypes = {
	closeEditForm: PropTypes.func.isRequired,
	contactToUpdate: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
}