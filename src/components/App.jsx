import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({
        contacts: savedContacts,
      });
    }
	};
	
  componentDidUpdate(_, prevState) {
	  if (prevState.contacts !== this.state.contacts) {
		 const stringifiedContacts = JSON.stringify(this.state.contacts);
		 localStorage.setItem('contacts', stringifiedContacts);
	 }
  };

  addContacts = ({ name, number }) => {
    if (
      this.state.contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      return alert(`${name} is already in contacts!`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  setFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    let filteredContacts = this.filterContacts();
    return (
      <main>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContacts} />
        </Section>
        <Section title="Contacts">
          <Filter setFilter={this.setFilter} filterState={this.state.filter} />
          <ContactList
            filteredContacts={filteredContacts}
            removeContact={this.removeContact}
          />
        </Section>
      </main>
    );
  }
}
