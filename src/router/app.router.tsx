import { createBrowserRouter } from 'react-router'
import IndexPage from '@/pages/IndexPage'
import AppLayout from '@/layouts/AppLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import SportPage from '@/pages/SportPage'

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
        path: 'sports/:slug',
        element: <SportPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
