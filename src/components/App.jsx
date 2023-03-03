import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { getIsLoading, selectContacts } from 'redux/selectors';

import { ContactList, ContactForm, Section, Filter, Loader } from 'components';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      {isLoading && <Loader />}
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        {!contacts.length ? <p>You don't have contacts yet!</p> : <ContactList />}
      </Section>
    </main>
  );
}
