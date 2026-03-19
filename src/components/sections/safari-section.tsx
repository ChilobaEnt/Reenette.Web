import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Binoculars, Camera, Users } from 'lucide-react';
import Reviews from '@/components/reviews/Reviews';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BookingForm } from './booking-form';
import kenyaSafari from '@/assets/kenya-safari.jpg';
import safariExperience from '@/assets/safari-experience.jpg';
import heroMountain from '@/assets/hero-mountain.jpg';
import type { Tour } from '@/types';

const safariTours: Tour[] = [
  {
    id: 1,
    title: 'Maasai Mara Big Five Safari',
    location: 'Maasai Mara National Reserve',
    image_url: kenyaSafari,
    rating: 4.9,
    duration: '5 days',
    description: 'Witness the Great Migration and encounter the Big Five in Kenya\'s most famous reserve.',
    highlights: ['Big Five Viewing', 'Great Migration', 'Maasai Culture', 'Game Drives'],
    price: 2499.99,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Amboseli Elephant Safari',
    location: 'Amboseli National Park',
    image_url: safariExperience,
    rating: 4.7,
    duration: '4 days',
    description: 'Experience close encounters with elephants against the backdrop of Mount Kilimanjaro.',
    highlights: ['Elephant Herds', 'Mt. Kilimanjaro Views', 'Birdwatching', 'Photography'],
    price: 1999.99,
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Mount Kenya Adventure',
    location: 'Mount Kenya National Park',
    image_url: heroMountain,
    rating: 4.8,
    duration: '6 days',
    description: 'Combine wildlife viewing with mountain adventures in Kenya\'s highest peak region.',
    highlights: ['Mountain Views', 'Diverse Wildlife', 'Hiking Trails', 'Cultural Sites'],
    price: 2799.99,
    created_at: new Date().toISOString()
  }
];

export function SafariSection() {
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
      <section id="safari" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            East African{' '}
            <span className="text-white">
              Safari Tours
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover Kenya's incredible wildlife and landscapes with our expert guides. 
            From the Big Five to the Great Migration, experience Africa's natural wonders.
          </p>
        </div>

        {/* Safari Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {safariTours.map((tour, index) => (
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
                    <Clock className="h-3 w-3 mr-1" />
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
                    {/* live reviews (average) */}
                    <div className="mr-2">
                      {/* Reviews component displays avg rating and can show full list when enabled */}
                      <Reviews tourId={tour.id} fallbackRating={tour.rating} />
                    </div>
                  </div>
                </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>                <p className="text-muted-foreground mb-4">
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
                  <Binoculars className="h-4 w-4 mr-2" />
                  Book Safari
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safari Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Binoculars className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">Expert Guides</h3>
            <p className="text-muted-foreground text-sm">
              Professional safari guides with deep knowledge of Kenya's wildlife and ecosystems.
            </p>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">Photography Tours</h3>
            <p className="text-muted-foreground text-sm">
              Specialized photography safaris to capture Kenya's incredible wildlife and landscapes.
            </p>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">Small Groups</h3>
            <p className="text-muted-foreground text-sm">
              Intimate group sizes ensure personalized attention and better wildlife viewing.
            </p>
          </Card>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.location.href = '#contact'}
          >
            View All Safari Tours
          </Button>
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
      </div>
    </section>
    </ErrorBoundary>
  );
}