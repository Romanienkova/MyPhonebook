import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import {
  selectContacts,
  selectError,
  selectFilter,
} from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';

// import { StyledContactList } from './ContactList.styled';
import s from '../App.module.css';

 export const ContactList = () => {
   const items = useSelector(selectContacts);
   const filterName = useSelector(selectFilter);
   const dispatch = useDispatch();

   const error = useSelector(selectError);

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

   const filterContacts = () => {
     if (filterName) {
       const filterLow = filterName.toLowerCase().trim();
       return items.filter(({ name }) =>
         name.toLowerCase().includes(filterLow)
       );
     } else {
       return items;
     }
   };

   const filteredContacts = filterContacts();

   return (
     <>
       <div>{error && <b>{error}</b>}</div>
       <ul className={s.items}>
				
           {filteredContacts.map(({ name, number, id }) =>{return (
             <li className={s.item} key={id}>
               <span style={{ width: 200 }}>{name}: </span>
               <span>{number}</span>

               <button
                 className={s.buttonDel}
                 type="button"
                 onClick={() => dispatch(deleteContact(id))}
               >
                 <FaRegTrashAlt size={20} />
               </button>
             </li>
           );})}
         
       </ul>
     </>
   );
 };
