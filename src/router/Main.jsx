import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { publicRoutes } from './publicRoutes';

import { ProtectedRoute } from './ProtectedRoute';
import { privateRoutes } from './privateRoutes';

import { AuthProvider } from './AuthProvider';

export const Main = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            {privateRoutes.map(({ path, exact, element: Element }) => {
              return <Route path={path} exact={exact} element={<Element />} key={nanoid()} />;
            })}
          </Route>
          {publicRoutes.map(({ path, exact, element: Element }) => {
            return <Route key={nanoid()} path={path} exact={exact} element={<Element />} />;
          })}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
