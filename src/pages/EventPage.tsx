import { Button } from '@/components/ui/button'
import { sportsData } from '@/data/sports.data'
import { ArrowLeft, Clock, MapPin, Users } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'

function EventPage() {
  const { slug } = useParams()

  const navigate = useNavigate()

  const sport = sportsData.find((s) => s.slug === slug)

  if (!sport) {
    return (
      <div className="bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Event not found</p>
          <Button variant="outline" onClick={() => navigate('/')}>
            Go back home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Button
        className="group flex items-center gap-2"
        onClick={() => navigate('/')}
      >
        <ArrowLeft />
        <span className="text-sm font-medium">Back</span>
      </Button>

      <header className="space-y-4 my-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          {sport.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {sport.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div
          className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-muted rounded-lg">
              <MapPin className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Ubicación
            </span>
          </div>
          <p className="text-lg font-semibold text-card-foreground">
            Alameda Sur
          </p>
        </div>

        <div
          className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-muted rounded-lg">
              <Users className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Capacidad
            </span>
          </div>
          <p className="text-lg font-semibold text-card-foreground">
            8 personas
          </p>
        </div>

        <div
          className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-muted rounded-lg">
              <Clock className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Sesiones
            </span>
          </div>
          <p className="text-lg font-semibold text-card-foreground">
            2 veces por semana
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventPage
