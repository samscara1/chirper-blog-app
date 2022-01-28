import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { publicRoutes } from './publicRoutes';

import { ProtectedRoutes } from './ProtectedRoutes';
import { privateRoutes } from './privateRoutes';

export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          {privateRoutes.map(({ path, exact, element: Element }) => {
            return <Route path={path} exact={exact} element={<Element />} key={nanoid()} />;
          })}
        </Route>
        {publicRoutes.map(({ path, exact, element: Element }) => {
          return <Route key={nanoid()} path={path} exact={exact} element={<Element />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
