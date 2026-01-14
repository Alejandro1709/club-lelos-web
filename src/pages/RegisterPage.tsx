import RegisterForm from '@/components/auth/RegisterForm'
import { Link } from 'react-router'

function RegisterPage() {
  return (
    <>
      <header className="flex items-center justify-between mb-8 animate-fade-in">
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
            Welcome!
          </h1>
          <p>Create an account to access and manage your reservations</p>
        </div>
      </header>

      <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
        <RegisterForm />

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            to="/auth/login"
            className="text-foreground font-medium hover:underline transition-all"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  )
}

export default RegisterPage
