import { useQuery } from '@tanstack/react-query'
import { getEvents } from '@/actions/get-events.action'
import ActionBar from '@/components/common/ActionBar'
import EventCard from '@/components/events/EventCard'

function IndexPage() {
  const { data: events, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  })

  if (isLoading) {
    return (
      <div className="bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Searchbar and action buttons */}
      <ActionBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events &&
          events.map((event, index) => (
            <EventCard key={event._id} event={event} index={index} />
          ))}
      </div>
    </>
  )
}

export default IndexPage
