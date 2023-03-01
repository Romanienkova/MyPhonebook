import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterValue } from 'redux/contacts/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';

import { StyledFilter } from './Filter.styled';

export function Filter() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(setFilterValue(e.target.value));

  return (
    <StyledFilter htmlFor="filter">
      <p>Find contacts by name</p>

      <input
        type="text"
        name="filter"
        id="filter"
        onChange={handleChangeFilter}
        disabled={!contacts.length}
      />
    </StyledFilter>
  );
}
