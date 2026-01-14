import { Navigate, Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Header from '@/components/common/Header'
import useAuth from '@/hooks/useAuth'

function AppLayout() {
  const { data, isLoading, isError } = useAuth()

  if (isLoading) return 'Loading...'

  if (isError) {
    return <Navigate to="/auth/login" />
  }

  if (data) {
    return (
      <div className="min-h-screen bg-[#FDFDFD]">
        <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
          <Header title="Club Lelo's" user={data} />

          <Outlet />
        </div>
        <ToastContainer />
      </div>
    )
  }
}

export default AppLayout
