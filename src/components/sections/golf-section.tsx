import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Trophy, Calendar, Users } from 'lucide-react';
import { GolfToursModal } from './golf-tours-modal';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BookingForm } from './booking-form';

import kenyaGolf from '@/assets/kenya-golf.jpg';
import beachParadise from '@/assets/beach-paradise.jpg';
import templeHeritage from '@/assets/Muthaiga-Golf-Club.jpg';
import type { Tour } from '@/types';

const golfTours: Tour[] = [
  {
    id: 1,
    title: 'Karen Country Club Experience',
    location: 'Karen, Nairobi',
    image_url: kenyaGolf,
    rating: 4.9,
    duration: '3 days',
    description: 'Play at one of Kenya\'s most prestigious golf clubs with stunning views and championship course.',
    highlights: ['Championship Course', 'Club Facilities', 'Professional Caddie', 'Luxury Accommodation'],
    price: 1999.99,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Coastal Golf Getaway',
    location: 'Nyali & Vipingo Ridge',
    image_url: beachParadise,
    rating: 4.8,
    duration: '5 days',
    description: 'Combine golf with beach relaxation at Kenya\'s premier coastal golf destinations.',
    highlights: ['Ocean Views', 'Beach Resort', 'Two Courses', 'Spa & Wellness'],
    price: 2499.99,
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Highland Golf Safari',
    location: 'Limuru & Muthaiga',
    image_url: templeHeritage,
    rating: 4.7,
    duration: '4 days',
    description: 'Experience golf in Kenya\'s beautiful highlands with historic clubs and scenic courses.',
    highlights: ['Historic Clubs', 'Mountain Views', 'Colonial Heritage', 'Fine Dining'],
    price: 2299.99,
    created_at: new Date().toISOString()
  }
];

const golfClubs = [
  { name: 'Karen Country Club', par: 72, holes: 18, established: '1936' },
  { name: 'Muthaiga Golf Club', par: 71, holes: 18, established: '1913' },
  { name: 'Sigona Golf Club', par: 72, holes: 18, established: '1971' },
  { name: 'Limuru Country Club', par: 70, holes: 18, established: '1950' },
  { name: 'Nyali Golf Club', par: 72, holes: 18, established: '1950' },
  { name: 'Vipingo Ridge', par: 72, holes: 18, established: '2009' }
];

export function GolfSection() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleBooking = (tour: Tour) => {
    setSelectedTour(tour);
    setDialogOpen(true);
  };

  const handleBookingSuccess = () => {
    setTimeout(() => {
      setDialogOpen(false);
    }, 3000);
  };

  return (
    <ErrorBoundary>
      <section id="golf" className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Championship{' '}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Golf Tours
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Play on Kenya's most prestigious golf courses. From historic colonial clubs 
            to modern championship layouts, experience golf in paradise.
          </p>
        </div>

        {/* Golf Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {golfTours.map((tour, index) => (
            <Card
              key={tour.id}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-adventure transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image_url}
                  alt={tour.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {tour.duration}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-1 fill-current" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {tour.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.highlights.map((highlight) => (
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
                  onClick={() => handleBooking(tour)}
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  Book Golf Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mb-16">
          <GolfToursModal>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Premium Golf Tours
            </Button>
          </GolfToursModal>
        </div>


        {/* Golf Clubs Directory */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-adventure mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Featured Golf Clubs
            </h3>
            <p className="text-primary-foreground/80">
              Play at Kenya's most prestigious golf destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {golfClubs.map((club, index) => (
              <Card
                key={club.name}
                className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary-foreground mb-2">{club.name}</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm text-primary-foreground/80">
                    <div>
                      <span className="font-medium">Par:</span> {club.par}
                    </div>
                    <div>
                      <span className="font-medium">Holes:</span> {club.holes}
                    </div>
                    <div>
                      <span className="font-medium">Est:</span> {club.established}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Golf Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Championship Courses</h3>
            <p className="text-muted-foreground text-sm">
              Play on world-class courses designed by renowned golf architects.
            </p>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Professional Caddies</h3>
            <p className="text-muted-foreground text-sm">
              Experienced local caddies who know every green and hazard.
            </p>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Year-Round Play</h3>
            <p className="text-muted-foreground text-sm">
              Perfect weather conditions for golf throughout the year.
            </p>
          </Card>
        </div>
      </div>

      {/* Booking Dialog */}
      {selectedTour && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedTour.title}</DialogTitle>
            </DialogHeader>
            <BookingForm tour={selectedTour} onSuccess={handleBookingSuccess} />
          </DialogContent>
        </Dialog>
      )}
    </section>
    </ErrorBoundary>
  );
}