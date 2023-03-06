import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

import c from './LoginPage.module.css';

export default function LoginPage() {
	const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
    setEmail('');
    setPassword('');
  };

  return (
    <div className={c.div}>
      <form className={c.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={c.title}>Login</h2>
        <label className={c.label}>
          Email
          <input
            className={c.input}
            type="email"
            name="email"
            value={email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label className={c.label}>
          Password
          <input
            className={c.input}
            type="password"
            name="password"
            value={password}
            onChange={event => handleChange(event)}
          />
        </label>
        <button className={c.buttonSub} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
