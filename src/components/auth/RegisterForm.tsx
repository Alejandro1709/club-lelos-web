import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const RegisterUserSchema = z.object({
    name: z.string().min(1, { error: 'Please enter your name' }),
    email: z.email({ error: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(8, { error: 'Password must be at least 8 characters' }),
  })

  type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
  })

  const handleRegister = (formData: RegisterUserSchemaType) => {
    console.log(formData)
  }
  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="space-y-6"
      noValidate
    >
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register('name')}
          className="h-12 bg-background border-border rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
        />

        {errors.name ? (
          <div className="p-2 bg-red-400 text-white rounded-md">
            {errors.name.message}
          </div>
        ) : null}
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
          {...register('email')}
          className="h-12 bg-background border-border rounded-xl px-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
          required
        />

        {errors.email ? (
          <div className="p-2 bg-red-400 text-white rounded-md">
            {errors.email.message}
          </div>
        ) : null}
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
            {...register('password')}
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

        {errors.password ? (
          <div className="p-2 bg-red-400 text-white rounded-md">
            {errors.password.message}
          </div>
        ) : null}
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
