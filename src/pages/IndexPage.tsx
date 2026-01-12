import ActionBar from '@/components/common/ActionBar'
import SportCard from '@/components/SportCard'
import { sportsData } from '@/data/sports.data'

function IndexPage() {
  return (
    <>
      {/* Searchbar and action buttons */}
      <ActionBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sportsData.map((sport, index) => (
          <SportCard key={sport.id} sport={sport} index={index} />
        ))}
      </div>
    </>
  )
}

export default IndexPage
