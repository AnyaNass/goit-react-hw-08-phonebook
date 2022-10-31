import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner'
import { fetchContacts } from "redux/contacts/contacts-operations";
import { selectContacts, selectFilter, selectIsLoading, selectVisibleContacts } from "redux/contacts/contacts-selectors";
import { PhoneBookForm } from "./PhoneBookForm/PhoneBookForm";
import { Container } from "./Container/Container";
import { ContactsList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { DefaultPage } from "./DefaultPage/DefaultPage";
import { Modal } from "./Modal/Modal";
import { Alert } from "./Alert/Alert";

export const App = () => {
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

	return (<>
		<Container text="PhoneBook">
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
	)
};
