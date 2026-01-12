import { User } from 'lucide-react'
import { Link } from 'react-router'

interface Props {
  title: string
}

function Header({ title }: Props) {
  return (
    <header className="flex items-center justify-between mb-8 animate-fade-in">
      <Link className="hover:underline" to="/">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
          {title}
        </h1>
      </Link>

      <div className="flex items-center gap-2 text-foreground">
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
          <User className="h-4 w-4 text-muted-foreground" />
        </div>
        <span className="text-sm font-medium hidden sm:block">Admin user</span>
      </div>
    </header>
  )
}

export default Header
