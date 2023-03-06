import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { fetchContacts, addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

// import { StyledForm, StyledInput, ButtonAdd } from './ContactForm.styled';
import s from '../App.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      items.some(contact => contact.name.toLowerCase() === name.toLowerCase())
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
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="name">
        <p className={s.subtitle}>Name</p>
      </label>
      <input
        className={s.input}
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
        <p className={s.subtitle}>Number</p>
      </label>
      <input
        className={s.input}
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={s.buttonSub} type="submit">
        Add contact
      </button>
    </form>
  );
};
