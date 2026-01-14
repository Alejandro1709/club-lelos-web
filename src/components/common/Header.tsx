import type { User as UserType } from '@/types/auth'
import { User } from 'lucide-react'
import { Link } from 'react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'

interface Props {
  title: string
  user: UserType
}

function Header({ title, user }: Props) {
  return (
    <header className="flex items-center justify-between mb-8 animate-fade-in">
      <Link className="hover:underline" to="/">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
          {title}
        </h1>
      </Link>

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 text-foreground cursor-pointer">
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium hidden sm:block">
                {user.name}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Role: {user.role}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button>Login</Button>
        </div>
      )}
    </header>
  )
}

export default Header
