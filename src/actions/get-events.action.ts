import { leloApi } from '@/api/lelo.api'
import type { IEvent } from '@/types/event'
import { isAxiosError } from 'axios'

export const getEvents = async () => {
  try {
    const { data } = await leloApi.get<IEvent[]>('/events')

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
