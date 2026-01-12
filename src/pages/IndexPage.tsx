import ActionBar from '@/components/common/ActionBar'
import SportCard from '@/components/SportCard'

const sports = [
  {
    id: 1,
    title: 'Football',
    description: 'Entrena y compite en nuestras canchas de fútbol profesional',
  },
  {
    id: 2,
    title: 'Natación',
    description: 'Disfruta de nuestra piscina olímpica climatizada',
  },
  {
    id: 3,
    title: 'Basketball',
    description: 'Practica baloncesto en canchas cubiertas de alta calidad',
  },
]

function IndexPage() {
  return (
    <>
      {/* Searchbar and action buttons */}
      <ActionBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sports.map((sport, index) => (
          <SportCard key={sport.id} sport={sport} index={index} />
        ))}
      </div>
    </>
  )
}

export default IndexPage
