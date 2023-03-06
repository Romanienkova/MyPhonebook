import { useSelector, useDispatch } from 'react-redux';

import { addFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

// import { StyledFilter } from './Filter.styled';
import s from '../App.module.css';

 export function Filter() {
   const dispatch = useDispatch();
   const filterName = useSelector(selectFilter);

   const handleFilterChange = event => {
     dispatch(addFilter(event.target.value));
   };

   return (
     <label htmlFor="filter">
       <p>Find contacts by name</p>

       <input
         className={s.input}
         type="text"
         name="filter"
         value={filterName}
         onChange={e => handleFilterChange(e)} //   disabled={!contacts.length}
       />
     </label>
   );
 }

