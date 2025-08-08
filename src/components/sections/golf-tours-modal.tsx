import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Star, Calendar, Users, Trophy, Plane } from 'lucide-react';

const internationalTours = [
  {
    id: 1,
    name: 'Scotland Highlands Golf Experience',
    location: 'St. Andrews & Edinburgh',
    duration: '7 days',
    rating: 4.9,
    description: 'Play the legendary Old Course at St. Andrews and experience Scottish golf heritage.',
    highlights: ['Old Course St. Andrews', 'Royal Mile Edinburgh', 'Highland Whisky', 'Castle Tours'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    name: 'Spain Costa del Sol Golf',
    location: 'Marbella & Sotogrande',
    duration: '5 days',
    rating: 4.8,
    description: 'Mediterranean luxury golf with championship courses and beach resorts.',
    highlights: ['Championship Courses', 'Mediterranean Cuisine', 'Luxury Resorts', 'Beach Access'],
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    name: 'Ireland Links Golf Tour',
    location: 'Cork & Dublin',
    duration: '6 days',
    rating: 4.7,
    description: 'Experience dramatic links courses along Ireland\'s stunning coastline.',
    highlights: ['Links Courses', 'Irish Culture', 'Dublin City', 'Traditional Pubs'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop'
  }
];

const localTours = [
  {
    id: 4,
    name: 'Uganda Golf Safari',
    location: 'Kampala & Entebbe',
    duration: '4 days',
    rating: 4.6,
    description: 'Combine golf with gorilla trekking in the Pearl of Africa.',
    highlights: ['Gorilla Trekking', 'Lake Victoria', 'Kampala Golf Club', 'Cultural Tours'],
    image: 'https://images.unsplash.com/photo-1547970810-dc1eacd77b8b?w=400&h=250&fit=crop'
  },
  {
    id: 5,
    name: 'Tanzania Highland Golf',
    location: 'Arusha & Moshi',
    duration: '5 days',
    rating: 4.5,
    description: 'Golf with Mount Kilimanjaro views and Serengeti safari experience.',
    highlights: ['Kilimanjaro Views', 'Serengeti Access', 'Coffee Plantations', 'Maasai Culture'],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop'
  },
  {
    id: 6,
    name: 'Rwanda Hills Golf Tour',
    location: 'Kigali',
    duration: '3 days',
    rating: 4.4,
    description: 'Play golf in the land of a thousand hills with exceptional hospitality.',
    highlights: ['Kigali Golf Club', 'Genocide Memorial', 'Coffee Tours', 'Mountain Views'],
    image: 'https://images.unsplash.com/photo-1473789810014-375ed569d0ed?w=400&h=250&fit=crop'
  }
];

interface GolfToursModalProps {
  children: React.ReactNode;
}

export function GolfToursModal({ children }: GolfToursModalProps) {
  const [activeTab, setActiveTab] = useState('international');

  const renderTourCard = (tour: any) => (
    <Card key={tour.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-adventure transition-all duration-500">
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            <Calendar className="h-3 w-3 mr-1" />
            {tour.duration}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-3 w-3 text-accent mr-1 fill-current" />
            <span className="text-sm font-medium">{tour.rating}</span>
          </div>
        </div>

        <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
          {tour.name}
        </h4>

        <p className="text-muted-foreground text-sm mb-3">
          {tour.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {tour.highlights.map((highlight: string) => (
            <Badge
              key={highlight}
              variant="outline"
              className="text-xs"
            >
              {highlight}
            </Badge>
          ))}
        </div>

        <div className="flex justify-end">
          <Button 
            size="sm"
            className="hover:shadow-glow transition-all duration-300"
            onClick={() => window.location.href = '#contact'}
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Premium Golf Tours
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="international" className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              International Tours
            </TabsTrigger>
            <TabsTrigger value="local" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              East Africa Tours
            </TabsTrigger>
          </TabsList>

          <div className="overflow-y-auto max-h-[60vh]">
            <TabsContent value="international" className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">World-Class Golf Destinations</h3>
                <p className="text-muted-foreground">
                  Experience legendary courses and luxury accommodations worldwide
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {internationalTours.map(renderTourCard)}
              </div>
            </TabsContent>

            <TabsContent value="local" className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">East African Golf Adventures</h3>
                <p className="text-muted-foreground">
                  Combine exceptional golf with unique African experiences
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {localTours.map(renderTourCard)}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}