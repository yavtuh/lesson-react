import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage/UsersPage';
import Page404 from './pages/Page404';
import UserPage from './pages/UserPage/UserPage';


function RouteGuard({ children, redirectTo }) {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

const Route = () => {
  
  const routes = useRoutes([
    {
      path: '/',
      element: <RouteGuard redirectTo="/404" ><MainLayout /></RouteGuard>,
      children: [
        { element: <MainPage />, index: true },
        { path: 'users', element: <UsersPage /> },
        { path: 'users/:id', element: <UserPage /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ]);

  return routes;
}

export default Route