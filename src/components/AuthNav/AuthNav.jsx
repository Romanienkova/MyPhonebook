import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: 'rgba(190, 200, 56, 0.85)', fontWeight: 'bold' } : null;
  
export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink style={setActiveStyle} className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink style={setActiveStyle} className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
