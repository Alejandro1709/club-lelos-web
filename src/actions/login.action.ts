import { leloApi } from '@/api/lelo.api'

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
    const { data } = await leloApi.post('/auth/login', formData, config)

    return data
  } catch (error) {
    console.log(error)
  }
}
