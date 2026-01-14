import { useQuery } from '@tanstack/react-query'
import { getEvents } from '@/actions/get-events.action'
import ActionBar from '@/components/common/ActionBar'
import SportCard from '@/components/SportCard'

function IndexPage() {
  const { data: events, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  })

  if (isLoading) return 'Loading...'

  return (
    <>
      {/* Searchbar and action buttons */}
      <ActionBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events &&
          events.map((event, index) => (
            <SportCard key={event._id} event={event} index={index} />
          ))}
      </div>
    </>
  )
}

export default IndexPage
