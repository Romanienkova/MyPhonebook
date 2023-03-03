import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { StyledForm, StyledInput, ButtonAdd } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">
        <p>Name</p>
      </label>
      <StyledInput
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder=""
      />

      <label htmlFor="number">
        <p>Number</p>
      </label>
      <StyledInput
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </StyledForm>
  );
}
