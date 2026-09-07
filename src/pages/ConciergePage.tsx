import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/footer';
import { Star, Truck, Plane, MapPin, Utensils, Music, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ConciergePage = () => {
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({ 1: 0 });

  const vehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      category: 'Luxury Sedan',
      images: ['/mercedes-sedan-1.jpg', '/mercedes-sedan-2.jpg'],
      description: 'Premium executive sedan perfect for business meetings, airport transfers, and city tours. Leather interior, climate control, premium sound system.',
      capacity: '4 Passengers',
      features: ['Wi-Fi Hotspot', 'Premium Sound', 'Leather Seats', 'Climate Control']
    },
    {
      id: 2,
      name: 'BMW X3 M',
      category: 'Luxury SUV',
      images: ['/bmw-x3-m.jpg'],
      description: 'Dynamic performance meets luxury. Premium sport SUV perfect for those who demand both power and elegance. Advanced technology and superior handling for every journey.',
      capacity: '5 Passengers',
      features: ['Performance SUV', 'Advanced Tech', 'Premium Comfort', 'All-Terrain']
    },
    {
      id: 3,
      name: 'Land Cruiser Prado',
      category: 'Luxury SUV',
      images: ['/land-cruiser-prado.jpg'],
      description: 'Rugged elegance for safari adventures and rough terrain. Spacious interior with superior comfort for multi-day journeys through Kenya\'s landscapes.',
      capacity: '7 Passengers',
      features: ['All-Terrain', 'Comfortable', 'Safari-Ready', 'Large Luggage']
    }
  ];

  const handleNextImage = (vehicleId: number, totalImages: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [vehicleId]: ((prev[vehicleId] ?? 0) + 1) % totalImages
    }));
  };

  const handlePrevImage = (vehicleId: number, totalImages: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [vehicleId]: prev[vehicleId] === 0 ? totalImages - 1 : (prev[vehicleId] ?? 0) - 1
    }));
  };

  const lifestyleActivities = [
    {
      id: 1,
      type: 'Nairobi',
      title: 'Nairobi National Park Safari',
      description: 'Experience wildlife within the city limits. Spot lions, giraffes, and buffalo with the Nairobi skyline as backdrop.',
      icon: '🦁',
      highlights: ['Big Five', 'Photography', 'Picnic']
    },
    {
      id: 2,
      type: 'Nairobi',
      title: 'Karen Blixen Museum',
      description: 'Step into colonial history at the author\'s former residence. Explore the stories behind "Out of Africa" in an elegant setting.',
      icon: '📚',
      highlights: ['History', 'Architecture', 'Coffee']
    },
    {
      id: 3,
      type: 'Nairobi',
      title: 'Giraffe Centre',
      description: 'Hand-feed endangered Rothschild giraffes. A unique interactive experience supporting wildlife conservation efforts.',
      icon: '🦒',
      highlights: ['Conservation', 'Interactive', 'Family-Friendly']
    },
    {
      id: 4,
      type: 'Nairobi',
      title: 'Nairobi Dining Scene',
      description: 'From Michelin-worthy restaurants to authentic local cuisine. Discover culinary excellence across diverse cuisines.',
      icon: '🍽️',
      highlights: ['Fine Dining', 'Local Cuisine', 'Wine Bars']
    },
    {
      id: 5,
      type: 'Nairobi',
      title: 'David Sheldrick Wildlife Trust',
      description: 'Meet rescued baby elephants. A heartwarming experience supporting wildlife rehabilitation and conservation.',
      icon: '🐘',
      highlights: ['Wildlife', 'Rescue', 'Conservation']
    },
    {
      id: 6,
      type: 'Nairobi',
      title: 'Luxury Spa & Wellness',
      description: 'Rejuvenate with world-class spa treatments using traditional African healing methods and modern techniques.',
      icon: '💆',
      highlights: ['Spa', 'Wellness', 'Relaxation']
    },
    {
      id: 7,
      type: 'Nairobi',
      title: 'Nairobi Shopping & Nightlife',
      description: 'Premium shopping at Westgate Mall or Village Market, followed by vibrant nightlife at exclusive clubs and lounges.',
      icon: '🛍️',
      highlights: ['Shopping', 'Entertainment', 'Nightlife']
    },
    {
      id: 8,
      type: 'Kenya',
      title: 'Maasai Mara National Reserve',
      description: 'Witness the Great Migration. One of the world\'s most spectacular wildlife experiences with endless plains and diverse fauna.',
      icon: '🌾',
      highlights: ['Migration', 'Photography', 'Adventure']
    },
    {
      id: 9,
      type: 'Kenya',
      title: 'Amboseli National Park',
      description: 'Perfect elephant viewing with Mount Kilimanjaro as backdrop. Excellent for photography and wildlife observation.',
      icon: '📸',
      highlights: ['Elephants', 'Kilimanjaro', 'Photography']
    },
    {
      id: 10,
      type: 'Kenya',
      title: 'Diani Beach Retreat',
      description: 'Pristine white-sand beaches along the Indian Ocean. Perfect for relaxation, water sports, and island excursions.',
      icon: '🏖️',
      highlights: ['Beach', 'Relaxation', 'Water Sports']
    }
  ];

  const nairobi = lifestyleActivities.filter(a => a.type === 'Nairobi');
  const kenya = lifestyleActivities.filter(a => a.type === 'Kenya');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Concierge & VIP Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your gateway to unparalleled luxury, seamless travel, and unforgettable experiences across Nairobi and Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Three Main Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Airport VIP */}
            <div className="p-8 bg-card/60 rounded-xl shadow-soft hover:shadow-adventure transition-all duration-300 border border-border/50">
              <div className="flex items-center mb-4">
                <Plane className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-bold">Airport VIP Meet & Greet</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Priority arrival and departure assistance including fast-track immigration, dedicated meet and greet, priority baggage handling and escorted transfers into Nairobi.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Dedicated terminal greeter</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Immigration fast-track</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Priority baggage handling</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Private escort service</li>
              </ul>
            </div>

            {/* Executive Car Rentals */}
            <div className="p-8 bg-card/60 rounded-xl shadow-soft hover:shadow-adventure transition-all duration-300 border border-border/50">
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-bold">Executive Car Rentals</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                A curated fleet of premium vehicles with experienced chauffeurs available for airport transfers, hourly hire, full-day use or multi-day corporate programmes.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Luxury sedans & SUVs</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Vetted professional drivers</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Hourly to long-term rentals</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Safari-ready vehicles</li>
              </ul>
            </div>

            {/* Lifestyle & Bespoke */}
            <div className="p-8 bg-card/60 rounded-xl shadow-soft hover:shadow-adventure transition-all duration-300 border border-border/50">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-bold">Lifestyle & Bespoke</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                From private dining and restaurant reservations to event access, personal shopping and tailored experiences—we manage each detail with discretion and speed.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Fine dining reservations</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Event & VIP access</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Personal shopping & styling</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span> Bespoke experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-20 bg-gradient-to-br from-muted/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Fleet</h2>
            <p className="text-lg text-muted-foreground">
              Hand-picked luxury vehicles for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="group bg-card/60 rounded-xl overflow-hidden shadow-soft hover:shadow-adventure transition-all duration-300 border border-border/50">
                <div className="h-48 bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={vehicle.images[imageIndexes[vehicle.id] ?? 0]} 
                    alt={`${vehicle.name} ${(imageIndexes[vehicle.id] ?? 0) + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => handlePrevImage(vehicle.id, vehicle.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleNextImage(vehicle.id, vehicle.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {vehicle.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === (imageIndexes[vehicle.id] ?? 0) ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent font-semibold mb-2">{vehicle.category}</p>
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
                  <p className="text-sm font-semibold text-accent mb-4">
                    <Zap className="h-4 w-4 inline mr-1" />
                    {vehicle.capacity}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle & Magazine Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lifestyle & Experiences Magazine</h2>
            <p className="text-lg text-muted-foreground">
              Curated top destinations and activities across Nairobi and Kenya
            </p>
          </div>

          {/* Nairobi Experiences */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-10 flex items-center">
              <MapPin className="h-8 w-8 text-accent mr-3" />
              Top 7 Nairobi Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nairobi.map((activity) => (
                <div key={activity.id} className="group bg-card/60 rounded-lg overflow-hidden shadow-soft hover:shadow-adventure transition-all duration-300 border border-border/50 hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-lg mb-2">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {activity.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kenya Experiences */}
          <div>
            <h3 className="text-3xl font-bold mb-10 flex items-center">
              <MapPin className="h-8 w-8 text-accent mr-3" />
              Top 3 Kenya Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kenya.map((activity) => (
                <div key={activity.id} className="group bg-gradient-to-br from-card/80 to-card/40 rounded-lg overflow-hidden shadow-soft hover:shadow-adventure transition-all duration-300 border border-border/50 hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-3">{activity.title}</h4>
                    <p className="text-muted-foreground mb-5">{activity.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {activity.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-sm bg-accent/10 text-accent px-3 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Service?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact our concierge team today to book your services and discover why we're Kenya's premier travel concierge provider.
          </p>
          <Button 
            size="lg"
            className="bg-black text-white hover:bg-black/90"
            onClick={() => window.location.href = '/#contact'}
          >
            Request Concierge Assistance
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConciergePage;
