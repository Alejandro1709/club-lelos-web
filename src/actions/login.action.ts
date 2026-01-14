import { leloApi } from '@/api/lelo.api'
import { isAxiosError } from 'axios'

export const loginUser = async (formData: {
  email: string
  password: string
}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await leloApi.post<{ token: string }>(
      '/auth/login',
      formData,
      config
    )

    localStorage.setItem('token', data.token)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
