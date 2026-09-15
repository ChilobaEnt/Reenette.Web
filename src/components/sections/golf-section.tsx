import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Trophy, Calendar, Users } from 'lucide-react';
import Reviews from '@/components/reviews/Reviews';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BookingForm } from './booking-form';

import kenyaGolf from '@/assets/kenya-golf.jpg';
import beachParadise from '@/assets/beach-paradise.jpg';
import templeHeritage from '@/assets/Muthaiga-Golf-Club.jpg';
import karenCountryClub from '@/assets/Karen_Country_Club.jpg';
import type { Tour } from '@/types';

const golfTours: Tour[] = [
  {
    id: 1,
    title: 'Karen Country Club Experience',
    location: 'Karen, Nairobi',
    image_url: karenCountryClub,
    rating: 4.8,
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
    rating: 4.7,
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

const regionalTours = [
  {
    id: 4,
    title: 'Uganda Golf Safari',
    location: 'Kampala & Entebbe',
    image_url: 'https://journeysuganda.com/wp-content/uploads/2025/10/Screenshot_4.jpg',
    rating: 4.6,
    duration: '4 days',
    description: 'Combine golf with gorilla trekking and lakeside luxury in the Pearl of Africa.',
    highlights: ['Gorilla Trekking', 'Lake Victoria', 'Kampala Golf Club', 'Cultural Tours']
  },
  {
    id: 5,
    title: 'Tanzania Highland Golf',
    location: 'Arusha & Moshi',
    image_url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop',
    rating: 4.5,
    duration: '5 days',
    description: 'Golf with Mount Kilimanjaro views and an unforgettable safari-inspired itinerary.',
    highlights: ['Kilimanjaro Views', 'Serengeti Access', 'Coffee Plantations', 'Maasai Culture']
  },
  {
    id: 6,
    title: 'Rwanda Hills Golf Tour',
    location: 'Kigali',
    image_url: 'https://images.unsplash.com/photo-1473789810014-375ed569d0ed?w=400&h=250&fit=crop',
    rating: 4.4,
    duration: '3 days',
    description: 'Play golf in the Land of a Thousand Hills with exceptional hospitality and scenic beauty.',
    highlights: ['Kigali Golf Club', 'Genocide Memorial', 'Coffee Tours', 'Mountain Views']
  }
];

const internationalTours = [
  {
    id: 7,
    title: 'Scotland Highlands Golf Experience',
    location: 'St. Andrews & Edinburgh',
    image_url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '7 days',
    description: 'Play the legendary Old Course at St Andrews and enjoy world-famous Scottish golf heritage.',
    highlights: ['Old Course St. Andrews', 'Royal Mile Edinburgh', 'Highland Whisky', 'Castle Tours']
  },
  {
    id: 8,
    title: 'Spain Costa del Sol Golf',
    location: 'Marbella & Sotogrande',
    image_url: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=250&fit=crop',
    rating: 4.8,
    duration: '5 days',
    description: 'Mediterranean luxury golf with championship courses, beach clubs, and fine dining.',
    highlights: ['Championship Courses', 'Mediterranean Cuisine', 'Luxury Resorts', 'Beach Access']
  },
  {
    id: 9,
    title: 'Ireland Links Golf Tour',
    location: 'Cork & Dublin',
    image_url: 'https://www.premiergolf.com/wp-content/uploads/2024/01/DJI_0999_gb4tcb.jpg',
    rating: 4.7,
    duration: '6 days',
    description: 'Experience dramatic links courses and storied Irish golf tradition along the coast.',
    highlights: ['Links Courses', 'Irish Culture', 'Dublin City', 'Traditional Pubs']
  }
];

const golfCategories = [
  {
    title: 'Local Tours',
    description: 'Kenya favourites for golfers wanting luxury courses, warm weather, and ease of travel.',
    tours: golfTours,
  },
  {
    title: 'Regional Tours',
    description: 'Neighbouring destinations across East Africa for immersive golf and safari experiences.',
    tours: regionalTours,
  },
  {
    title: 'International Tours',
    description: 'Legendary courses and iconic destinations around the world for a true global golf escape.',
    tours: internationalTours,
  },
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Local and International{' '}
              <span className="text-white">
                Golf Tours
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Play on Kenya's most prestigious golf courses. From historic colonial clubs 
              to modern championship layouts, experience golf in paradise.
            </p>
          </div>

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
                      <Reviews tourId={tour.id} fallbackRating={tour.rating} />
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

          <div className="space-y-14 mb-16">
            {golfCategories.slice(1).map((category) => (
              <div key={category.title} className="space-y-6">
                <div className="border-b border-border/70 pb-3">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Golf Experiences</p>
                  <h3 className="text-3xl font-bold">{category.title}</h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.tours.map((tour) => (
                    <Card key={tour.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-adventure transition-all duration-500">
                      <div className="relative overflow-hidden">
                        <img
                          src={tour.image_url}
                          alt={tour.title}
                          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            {tour.duration}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{tour.location}</span>
                          </div>
                          <div className="flex items-center text-sm font-medium">
                            <Star className="h-3 w-3 text-accent mr-1 fill-current" />
                            {tour.rating}
                          </div>
                        </div>

                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {tour.title}
                        </h4>

                        <p className="text-muted-foreground text-sm mb-4">
                          {tour.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tour.highlights.map((highlight) => (
                            <Badge key={highlight} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.location.href = '#contact'}
                        >
                          Request a Custom Quote
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Championship Courses</h3>
              <p className="text-muted-foreground text-sm">
                Play on world-class courses designed by renowned golf architects.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Professional Caddies</h3>
              <p className="text-muted-foreground text-sm">
                Experienced local caddies who know every green and hazard.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Year-Round Play</h3>
              <p className="text-muted-foreground text-sm">
                Perfect weather conditions for golf throughout the year.
              </p>
            </Card>
          </div>
        </div>

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