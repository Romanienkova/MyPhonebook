import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const INITIAL_FRIENDS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('saved contacts')) ?? INITIAL_FRIENDS
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('saved contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const addContact = ({ name, number }) => {
    contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    )
      ? alert(`${name} is already in contacts`)
      : setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const getFilteredContacts = () => {
    return !filter
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().trim().includes(filter.toLowerCase())
        );
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <main>
      <Section title="Phonebook">
        <ContactForm addNewContact={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter handleFilterChange={handleChange} />

        <ContactList
          filteredContacts={getFilteredContacts()}
          removeContact={removeContact}
        />
      </Section>
    </main>
  );
};
