import { createBrowserRouter } from 'react-router'
import IndexPage from '../pages/IndexPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
])
