import { useState } from 'react'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <form onSubmit={() => {}} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          className="h-12 bg-background border-border rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
          required
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-background border-border rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
          required
        />
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="text-sm font-medium text-foreground"
        >
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-background border-border rounded-xl px-4 pr-12 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all shadow-soft group cursor-pointer"
      >
        Create Account
        <ArrowRight
          size={18}
          className="ml-2 group-hover:translate-x-1 transition-transform"
        />
      </Button>
    </form>
  )
}

export default RegisterForm
