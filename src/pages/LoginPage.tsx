import { Link } from 'react-router'
import LoginForm from '@/components/auth/LoginForm'

function LoginPage() {
  return (
    <>
      <header className="flex items-center justify-between mb-8 animate-fade-in">
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
            Welcome back!
          </h1>
          <p>Login to access and manage your reservations</p>
        </div>
      </header>

      <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
        <LoginForm />

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link
            to="/auth/create-account"
            className="text-foreground font-medium hover:underline transition-all"
          >
            Create account
          </Link>
        </p>
      </div>
    </>
  )
}

export default LoginPage
