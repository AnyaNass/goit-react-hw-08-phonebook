import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';

import { FaMobileAlt, FaRegTrashAlt } from 'react-icons/fa';
import { List, ListItem, ItemInfo, Info, DeleteButton } from './ContactList.styled'

export const ContactsList = () => {
	const dispatch = useDispatch();
	const visibleContacts = useSelector(selectVisibleContacts);

	return (
		<List>
			{visibleContacts.map(item => {
				return <ListItem key={item.id}>
					<ItemInfo>
						<Info><FaMobileAlt /></Info>
						<Info>{item.name}:</Info>
						<Info>{item.phone}</Info>
					</ItemInfo>
					<DeleteButton type="button" onClick={() => dispatch(deleteContact(item.id))}><FaRegTrashAlt /></DeleteButton>
				</ListItem>
			})}
		</List >
	)
}
