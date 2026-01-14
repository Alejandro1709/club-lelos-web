import { leloApi } from '@/api/lelo.api'
import type { IEvent } from '@/types/event'
import { isAxiosError } from 'axios'

export const getEvent = async (id: IEvent['_id']) => {
  try {
    const { data } = await leloApi.get<IEvent>(`/events/${id}`)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
