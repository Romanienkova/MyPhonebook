import propTypes from 'prop-types';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ filteredContacts, removeContact }) => {
  return (
    <StyledContactList>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button type="button" onClick={() => removeContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  filteredContacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  removeContact: propTypes.func.isRequired,
};
