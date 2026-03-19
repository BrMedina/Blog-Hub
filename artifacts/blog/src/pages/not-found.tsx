import { Link } from "wouter";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 text-muted-foreground">
          <FileQuestion className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-serif font-medium text-foreground mb-4">
          Story Not Found
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for seems to have wandered off the trail.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
