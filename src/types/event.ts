export interface IEvent {
  _id: string
  title: string
  description: string
  sport: {
    _id: string
    title: string
    slug?: string
    description: string
    category: {
      _id: string
      name: string
      isActive: boolean
    }
    isActive: boolean
  }
  price: number
  location: string
  maxPersonCount: number
  startDate: Date
  endDate: Date
  isActive: boolean
  isAvailable: boolean
  status: string
}
