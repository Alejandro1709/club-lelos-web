import { leloApi } from '@/api/lelo.api'
import { userSchema } from '@/types/auth'
import { isAxiosError } from 'axios'

export const getAuthUser = async () => {
  const token = localStorage.getItem('token')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const { data } = await leloApi.get('/auth/me', config)

    const response = userSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
