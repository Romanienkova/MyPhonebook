import { useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { ContactList, ContactForm, Section, Filter } from 'components';

export function App() {
  const contacts = useSelector(selectContacts);

  return (
    <main>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />

        {!contacts.length ? (
          <p>You don't have contacts yet!</p>
        ) : (
          <ContactList />
        )}
      </Section>
    </main>
  );
}
