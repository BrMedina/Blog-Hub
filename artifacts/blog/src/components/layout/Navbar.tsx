import { Link } from "wouter";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-2xl font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          EDUKASYON.
        </Link>
        
        <nav className="hidden sm:flex gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Stories
          </Link>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            About
          </button>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Subscribe
          </button>
        </nav>

        <button className="sm:hidden p-2 text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
