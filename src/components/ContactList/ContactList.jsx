import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import { deleteContact} from 'redux/operations';
import { getFilteredContacts } from 'redux/selectors';

import { StyledContactList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
	const dispatch = useDispatch();

	const handleDeleteContact = id => {
		dispatch(deleteContact(id));
	};


	return (
    <>
      <StyledContactList>
        {Boolean(contacts.length) ? (
          contacts.map(({ name, number, id }) => (
            <li key={id}>
              <span style={{ width: 200 }}>{name}: </span>
              <span>{number}</span>

              <button type="button" onClick={() => handleDeleteContact(id)}>
                <FaRegTrashAlt size={20} />
              </button>
            </li>
          ))
        ) : (
          <p>There is no such contact</p>
        )}
      </StyledContactList>
    </>
  );
};
