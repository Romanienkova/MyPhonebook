import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addFilter } from 'redux/filter/filterSlice';


import { StyledFilter } from './Filter.styled';

export function Filter() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(addFilter(e.target.value));

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
