import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-medium tracking-tight inline-block mb-4 hover:opacity-80 transition-opacity">
              AURA.
            </Link>
            <p className="text-background/60 max-w-sm font-light">
              A digital space dedicated to intentional living, thoughtful work, and meaningful exploration. 
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg font-serif mb-4">Explore</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li><Link href="/" className="hover:text-background transition-colors">All Stories</Link></li>
              <li><button className="hover:text-background transition-colors cursor-pointer">Lifestyle</button></li>
              <li><button className="hover:text-background transition-colors cursor-pointer">Productivity</button></li>
              <li><button className="hover:text-background transition-colors cursor-pointer">Travel</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg font-serif mb-4">Connect</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li><button className="hover:text-background transition-colors cursor-pointer">Twitter</button></li>
              <li><button className="hover:text-background transition-colors cursor-pointer">Instagram</button></li>
              <li><button className="hover:text-background transition-colors cursor-pointer">Newsletter</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background/40">
          <p>© 2026 Aura Publications. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <button className="hover:text-background transition-colors cursor-pointer">Privacy Policy</button>
            <button className="hover:text-background transition-colors cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
