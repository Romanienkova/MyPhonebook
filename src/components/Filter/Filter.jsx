import { useDispatch } from 'react-redux';

import { addFilter } from 'redux/filter/filterSlice';

import { StyledFilter } from './Filter.styled';

export function Filter() {
	const dispatch = useDispatch();
	
  return (
    <StyledFilter htmlFor="filter">
      <p>Find contacts by name</p>

      <input
        type="text"
        name="filter"
        id="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      //   disabled={!contacts.length}
      />
    </StyledFilter>
  );
}
