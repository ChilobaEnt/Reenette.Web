import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Safari Tours', href: '#safari' },
    { label: 'Golf Tours', href: '#golf' },
    { label: 'Concierge', href: '#concierge' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Custom logo image (placed in public/) - links to home */}
            <a href="/" className="inline-block -mt-0.5">
              {/* slightly larger logo for better clarity and spacing on desktop */}
              <img src="/Reenette-Logo.jpg" alt="Reenette logo" className="h-12 md:h-14 w-auto object-contain" />
            </a>
            <span className="text-xl md:text-2xl font-bold text-primary">
              <span className="hidden md:inline">Reenette Tours and Travel Ltd</span>
              <span className="inline md:hidden">Reenette Tours</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              size="lg" 
              className="shadow-adventure bg-gradient-hero hover:shadow-glow transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              onClick={() => window.location.href = '#contact'}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="animate-pulse">🧭</span>
                Get Your Custom Itinerary
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-hero hover:shadow-glow transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="animate-pulse">🧭</span>
                    Plan Your Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}