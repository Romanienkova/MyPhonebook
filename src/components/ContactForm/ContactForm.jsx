import { useState } from 'react';
import propTypes from 'prop-types';

import { StyledForm, StyledInput, ButtonAdd } from './ContactForm.styled';

export const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
	const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    addNewContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <label>
        <p>Name</p>
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <p>Number</p>
        <StyledInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  addNewContact: propTypes.func.isRequired,
};
