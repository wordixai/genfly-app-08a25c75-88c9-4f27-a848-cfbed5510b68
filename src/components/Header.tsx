import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">OR</span>
          </div>
          <span className="text-lg font-semibold">OpenRouter</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-64 bg-muted rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground font-mono">
            /
          </kbd>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Models
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Chat
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Rankings
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
        </nav>

        <Button size="sm">
          Sign In
        </Button>
      </div>
    </header>
  )
}

export default Header