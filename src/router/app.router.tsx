import { createBrowserRouter } from 'react-router'
import IndexPage from '@/pages/IndexPage'
import AppLayout from '@/layouts/AppLayout'
import NotFoundPage from '@/pages/NotFoundPage'

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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
