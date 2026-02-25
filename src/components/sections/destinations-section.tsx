import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock } from 'lucide-react';
import beachParadise from '@/assets/beach-paradise.jpg';
import templeHeritage from '@/assets/temple-heritage.jpg';
import safariAdventure from '@/assets/safari-adventure.jpg';

const destinations = [
  {
    id: 1,
    name: 'Tropical Paradise',
    location: 'Maldives',
    image: beachParadise,
    rating: 4.9,
    duration: '7 days',
    description: 'Pristine beaches, crystal-clear waters, and luxury overwater villas await.',
    highlights: ['Overwater Villa', 'Snorkeling', 'Spa Resort']
  },
  {
    id: 2,
    name: 'Ancient Wonders',
    location: 'Cambodia',
    image: templeHeritage,
    rating: 4.8,
    duration: '10 days',
    description: 'Explore magnificent temples and immerse yourself in rich cultural heritage.',
    highlights: ['Angkor Wat', 'Local Culture', 'Photography']
  },
  {
    id: 3,
    name: 'Safari Adventure',
    location: 'Tanzania',
    image: safariAdventure,
    rating: 4.9,
    duration: '12 days',
    description: 'Witness the Great Migration and experience Africa\'s incredible wildlife.',
    highlights: ['Big Five', 'Luxury Camps', 'Game Drives']
  }
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="text-white">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover extraordinary places that will create memories to last a lifetime. 
            From pristine beaches to ancient wonders, adventure awaits.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card
              key={destination.id}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-adventure transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {destination.duration}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-1 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      variant="outline"
                      className="text-xs"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full group-hover:shadow-glow transition-all duration-300"
                  variant="default"
                  onClick={() => window.location.href = '#contact'}
                >
                  Explore Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.location.href = '#contact'}
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}