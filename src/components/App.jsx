import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Routes, Route } from 'react-router-dom';

import { Layout } from './index';
import { useAuth } from '../hooks/useAuth';
import { currentUser } from '../redux/auth/operations';

import {PrivateRoute} from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {Loader} from './Loader/Loader';

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

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" redirectTo="/home" element={<Layout />}>
          <Route index element={<LazyHome />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<LazyRegister />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LazyLogin />} />
            }
          />
          <Route path="/home" element={<LazyHome />} />
          <Route
            path="/home"
            element={<PrivateRoute component={<LazyHome />} />}
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/home" component={<LazyContacts />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
