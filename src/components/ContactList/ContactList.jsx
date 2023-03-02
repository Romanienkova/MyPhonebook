import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import { deleteContact } from 'redux/contacts/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';

import { StyledContactList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <StyledContactList>
      {Boolean(contacts.length) ? (
        contacts.map(({ name, number, id }) => (
          <li key={id}>
            <span style={{ width: 200 }}>{name}: </span>
            <span>{number}</span>

            <button type="button" onClick={() => dispatch(deleteContact(id))}>
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
