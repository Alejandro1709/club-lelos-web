import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import type { IEvent } from '@/types/event'

interface SportCardProps {
  event: IEvent
  index?: number
}

function SportCard({ event, index = 0 }: SportCardProps) {
  return (
    <Link
      to={`/events/${event._id}`}
      className="animate-fade-in-up"
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      <div
        className="group relative bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-soft-lg hover:border-foreground/20 hover:-translate-y-1"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-foreground transition-colors">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
      </div>
    </Link>
  )
}

export default SportCard
