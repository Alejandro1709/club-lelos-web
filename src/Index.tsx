import { RouterProvider } from 'react-router'
import { appRouter } from '@/router/app.router'

function Index() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Index
