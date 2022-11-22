import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';

import { FaMobileAlt, FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { List, ListItem, ItemInfo, Info, DeleteButton, EditBtn } from './ContactList.styled'

import { EditContactForm } from 'components/EditContactForm/EditContactForm';

export const ContactsList = ({ editContactModal }) => {
	const dispatch = useDispatch();
	const visibleContacts = useSelector(selectVisibleContacts);
	const isPhone = useMedia('(max-width: 549px)')

	const [editForm, setEditForm] = useState(false);
	const [contactToUpdate, setContactToUpdate] = useState();

	const handleEdinBtn = id => {
		const contactToUpdate = visibleContacts.find(contact => contact.id === id);
		setEditForm(true);
		setContactToUpdate(contactToUpdate);
	}

	const closeEditForm = () => {
		setEditForm(false);
	}

	return (
		<List>
			{visibleContacts.map(item => {
				return <ListItem key={item.id}>
					<ItemInfo>
						<Info><FaMobileAlt /></Info>
						<Info>{item.name}:</Info>
						<Info>{item.number}</Info>
						{editForm && contactToUpdate.id === item.id && <EditContactForm closeEditForm={closeEditForm} id={item.id} contactToUpdate={contactToUpdate} />}
					</ItemInfo>
					{!isPhone && <DeleteButton type="button" onClick={() => dispatch(deleteContact(item.id))}><FaRegTrashAlt /></DeleteButton>}
					{!isPhone && <EditBtn type="button" onClick={() => handleEdinBtn(item.id)}><FaEdit /></EditBtn>}
					{isPhone && <EditBtn type="button" onClick={() => editContactModal(item.id)}><FaEdit /></EditBtn>}
				</ListItem>
			})}
		</List >
	)
}
