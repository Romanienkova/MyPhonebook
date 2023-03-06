import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import s from 'components/App.module.css';

const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.conteiner}>
      {isLoading && !error && <Loader />}

      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>

      <Filter />

      {<ContactList /> ?? <p> Yoy</p>}
    </div>
  );
};
export default Contact;
