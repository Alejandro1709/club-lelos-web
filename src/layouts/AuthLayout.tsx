import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  )
}

export default AuthLayout
