import { leloApi } from '@/api/lelo.api'
import { isAxiosError } from 'axios'

export const registerUser = async (formData: {
  name: string
  email: string
  password: string
}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await leloApi.post<{ message: string }>(
      '/auth/create-account',
      formData,
      config
    )

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
