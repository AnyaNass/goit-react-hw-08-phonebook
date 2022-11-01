import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { selectContacts, selectFilter, selectIsLoading, selectVisibleContacts } from "redux/contacts/contacts-selectors";
import { ThreeDots } from 'react-loader-spinner'
import { PhoneBookForm } from "components/PhoneBookForm/PhoneBookForm";
import { Container } from "components/Container/Container";
import { ContactsList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { DefaultPage } from "components/DefaultPage/DefaultPage";
import { Modal } from "components/Modal/Modal";
import { Alert } from "components/Alert/Alert";

export const ContactsPage = () => {
	const dispatch = useDispatch();

	const contacts = useSelector(selectContacts);
	const isLoading = useSelector(selectIsLoading);
	const filter = useSelector(selectFilter);
	const filteredContacts = useSelector(selectVisibleContacts)

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch]);

	const toggleModal = () => {
		setShowModal(prevSate => !prevSate)
	}

	return <>
		<Container text="Add contact">
			{showModal && <Modal onClose={toggleModal}>
				<Alert text="This name is already in contacts." />
			</Modal>}
			<PhoneBookForm toggleModal={toggleModal}></PhoneBookForm>
		</Container>
		<Container text="Contacts">
			{isLoading && <ThreeDots color="#fff" wrapperStyle={{ justifyContent: "center" }} />}
			{contacts.length > 0 && !isLoading && <>
				<Filter />
				<ContactsList />
			</>}
			{!contacts.length && !isLoading && <DefaultPage text="Add someone to your contacts" />}
			{!filteredContacts.length && filter && <DefaultPage text="There is not such a contact" />}
		</Container>
	</>
}