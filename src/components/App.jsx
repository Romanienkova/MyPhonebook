import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Routes, Route } from 'react-router-dom';

import { Layout } from './index';
import { useAuth } from '../hooks/useAuth';
import { currentUser } from '../redux/auth/operations';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const LazyHome = lazy(() => import('../pages/Home/HomePage'));
const LazyContacts = lazy(() => import('../pages/Contacts/ContactsPage'));
const LazyRegister = lazy(() => import('../pages/Register/RegisterPage'));
const LazyLogin = lazy(() => import('../pages/Login/LoginPage'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LazyHome />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LazyLogin />} restricted />
            </Route>

            <Route element={<PublicRoute />} restricted>
              <Route path="/register" element={<LazyRegister />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<LazyContacts />}></Route>
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </>
    )
  );
};
