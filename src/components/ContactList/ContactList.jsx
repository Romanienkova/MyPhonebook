import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import { deleteContact } from 'redux/contacts/contactsSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import { StyledContactList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = (contacts, filter) => {
    const filtered =
      filter && contacts.length
        ? contacts.filter(({ name }) =>
            name.trim().toLowerCase().includes(filter.trim().toLowerCase())
          )
        : contacts;

    return filtered;
  };

  const handleClickDelete = contactId => dispatch(deleteContact(contactId));

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <StyledContactList>
      {Boolean(filteredContacts.length) ? (
        filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            <span style={{ width: 200 }}>{name}: </span>
            <span>{number}</span>

            <button type="button" onClick={() => handleClickDelete(id)}>
              <FaRegTrashAlt size={20} />
            </button>
          </li>
        ))
      ) : (
        <p>There is no such contact</p>
      )}
    </StyledContactList>
  );
};
