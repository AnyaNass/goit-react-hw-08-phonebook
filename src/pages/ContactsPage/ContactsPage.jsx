import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { selectContacts, selectFilter, selectIsLoading, selectVisibleContacts } from "redux/contacts/contacts-selectors";
import { ThreeDots } from 'react-loader-spinner'
import { PhoneBookForm } from "components/PhoneBookForm/PhoneBookForm";
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { ContactsList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { DefaultPage } from "components/DefaultPage/DefaultPage";
import { Modal } from "components/Modal/Modal";
import { Alert } from "components/Alert/Alert";
import { EditContactForm } from "components/EditContactForm/EditContactForm";

export const ContactsPage = () => {
	const dispatch = useDispatch();

	const contacts = useSelector(selectContacts);
	const isLoading = useSelector(selectIsLoading);
	const filter = useSelector(selectFilter);
	const filteredContacts = useSelector(selectVisibleContacts)

	const [showModal, setShowModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);

	const [contactToUpdate, setContactToUpdate] = useState();
	const [contactId, setContactId] = useState('');

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch]);

	const toggleModal = () => {
		setShowModal(prevSate => !prevSate)
	}

	const toggleEditModal = id => {
		setContactId(id);
		const contactToUpdate = filteredContacts.find(contact => contact.id === id);
		setContactToUpdate(contactToUpdate);
		setShowEditModal(prevSate => !prevSate)
	}

	return <>
		<Section>
			<Container text="Add contact">
				{showModal && <Modal onClose={toggleModal}>
					<Alert text="This name is already in contacts." />
				</Modal>}
				{showEditModal && <Modal onClose={toggleEditModal}>
					<EditContactForm contactToUpdate={contactToUpdate} id={contactId} closeEditForm={toggleEditModal} />
				</Modal>}
				<PhoneBookForm toggleModal={toggleModal}></PhoneBookForm>
			</Container>
		</Section>
		<Section>
			<Container text="Contacts">
				{isLoading && <ThreeDots color="#fff" wrapperStyle={{ justifyContent: "center" }} />}
				{contacts.length > 0 && !isLoading && <>
					<Filter />
					<ContactsList editContactModal={toggleEditModal} />
				</>}
				{!contacts.length && !isLoading && <DefaultPage text="Add someone to your contacts" />}
				{!filteredContacts.length && filter && <DefaultPage text="There is not such a contact" />}
			</Container>
		</Section>
	</>
}