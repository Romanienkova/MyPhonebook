import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';

import s from 'components/App.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
	

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.conteiner}>
      {isLoading && !error && <Loader />}

      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>

      {contacts.length > 0 && <Filter />}

      {contacts.length === 0 ? (
        <p>You don't have contacts yet...</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
export default ContactsPage;
