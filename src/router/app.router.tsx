import { createBrowserRouter } from 'react-router'
import IndexPage from '../pages/IndexPage'
import AppLayout from '../layouts/AppLayout'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
    ],
  },
])
