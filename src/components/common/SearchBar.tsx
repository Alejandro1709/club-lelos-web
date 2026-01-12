import { Search } from 'lucide-react'

interface Props {
  placeholder?: string
}

function SearchBar({ placeholder = 'Search sport...' }: Props) {
  return (
    <div className="relative flex-1 max-w-xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 bg-input rounded-lg text-foreground placeholder:text-muted-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring/20 focus:bg-card transition-all duration-200"
      />
    </div>
  )
}

export default SearchBar
