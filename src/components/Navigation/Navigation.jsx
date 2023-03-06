import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

import css from './Navigation.module.css';

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: 'rgba(190, 200, 56, 0.85)' } : null;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink style={setActiveStyle} className={css.link} to="/" end>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink style={setActiveStyle} className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
