import { createBrowserRouter, Navigate } from 'react-router'
import IndexPage from '@/pages/IndexPage'
import AppLayout from '@/layouts/AppLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import EventPage from '@/pages/EventPage'
import AuthLayout from '@/layouts/AuthLayout'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'events/:id',
        element: <EventPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'create-account',
        element: <RegisterPage />,
      },
      {
        path: '*',
        element: <Navigate to="/auth/login" />,
      },
    ],
  },
])
