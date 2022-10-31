import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { FaUserAlt, FaPhoneAlt, FaUserPlus } from 'react-icons/fa';
import { Form, FormWrapper, FormField, FormLable, AddButton } from './PhoneBookForm.styled';
import { selectContacts } from 'redux/contacts/contacts-selectors';

export const PhoneBookForm = ({ toggleModal }) => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);

	const handleInputChange = e => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;
			case "phone":
				setPhone(e.target.value);
				break;
			default: return;
		}
	}

	const handleSubmit = e => {
		e.preventDefault();

		const names = contacts.map(contact => contact.name.toLowerCase())

		if (names.includes(name.toLowerCase())) {
			toggleModal();
			return;
		}

		dispatch(addContact({ name, phone }))
		setName("");
		setPhone("");
	}

	return <Form onSubmit={handleSubmit}>
		<FormWrapper>
			<FormField
				type="text"
				name="name"
				placeholder="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
				value={name}
				onChange={handleInputChange}
			/>
			<FormLable><FaUserAlt /></FormLable>
		</FormWrapper>
		<FormWrapper>
			<FormField
				type="tel"
				name="phone"
				placeholder="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
				value={phone}
				onChange={handleInputChange}
			/>
			<FormLable><FaPhoneAlt /></FormLable>
		</FormWrapper>
		<AddButton type="submit"><FaUserPlus /></AddButton>
	</Form >
}