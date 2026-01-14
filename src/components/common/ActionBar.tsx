import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import SearchBar from '@/components/common/SearchBar'
import { Calendar, Plus } from 'lucide-react'

function ActionBar() {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-10 animate-fade-in"
      style={{ animationDelay: '100ms' }}
    >
      {/* Searchbar */}
      <SearchBar />

      {/* Action buttons */}
      <div className="flex gap-2">
        <Button
          className="font-medium text-sm px-4 py-2.5 h-auto gap-2 shadow-soft hover:shadow-soft-lg transition-all duration-200 cursor-pointer"
          asChild
        >
          <Link to="/events/new">
            <Plus className="h-4 w-4" />
            New Event
          </Link>
        </Button>
        <Button
          variant="outline"
          className="font-medium text-sm px-4 py-2.5 h-auto gap-2 hover:bg-secondary transition-all duration-200 cursor-pointer"
          asChild
        >
          <Link to="/reservations">
            <Calendar className="h-4 w-4" />
            Reservas
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default ActionBar
