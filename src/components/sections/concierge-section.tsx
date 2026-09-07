import { Star, Truck, Plane } from 'lucide-react';
import vehicle1 from '@/assets/vehicles/vehicle1.jpg';
import vehicle2 from '@/assets/vehicles/vehicle2.jpg';
import vehicle3 from '@/assets/vehicles/vehicle3.jpg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function ConciergeSection() {
  const navigate = useNavigate();
  return (
    <section id="concierge" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Concierge & VIP Services</h2>
          <p className="text-lg text-muted-foreground">
            Highly personalized, 24/7 assistance for travel, lifestyle and business needs in Nairobi. We specialise in
            Airport VIP Meet & Greet and Executive Car Rentals, plus bespoke requests to save you time and enhance comfort.
            Our local team delivers white‑glove service tailored to premium travellers and corporate clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card/60 rounded-lg shadow-soft">
            <div className="flex items-center mb-4">
              <Plane className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Airport VIP Meet & Greet</h3>
            </div>
            <p className="text-muted-foreground">Priority arrival and departure assistance including fast‑track immigration, dedicated meet & greet, priority baggage handling and escorted transfers into Nairobi.</p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Dedicated terminal greeter & immigration fast‑track</li>
              <li>Priority baggage handling and customs assistance</li>
              <li>Private escort to vehicle or lounge</li>
            </ul>
          </div>

          <div className="p-6 bg-card/60 rounded-lg shadow-soft">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Executive Car Rentals & Transfers</h3>
            </div>
            <p className="text-muted-foreground">A curated fleet of executive vehicles with experienced chauffeurs — available for airport transfers, hourly hire, full‑day use or multi‑day corporate programmes.</p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Luxury sedans, SUVs and minibuses with vetted chauffeurs</li>
              <li>Airport transfers, corporate shuttles and bespoke itineraries</li>
              <li>Hourly hires, event transport and long‑term contracts</li>
            </ul>
          </div>

          <div className="p-6 bg-card/60 rounded-lg shadow-soft">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Lifestyle & Bespoke Requests</h3>
            </div>
            <p className="text-muted-foreground">From private dining and reservations at Nairobi’s premier restaurants to event access, personal shopping and tailored experiences — we manage each detail with discretion and speed.</p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Restaurant & event reservations</li>
              <li>Personal shopping and private guides</li>
              <li>VIP access, tickets and concierge sourcing</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">Our concierge team operates 24/7 and works closely with premium partners to ensure every detail is covered from corporate travel logistics to creating unforgettable leisure experiences.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => navigate('/concierge')}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              size="lg"
            >
              Click here to view more
            </Button>
            <Button 
              onClick={() => window.location.href = '#contact'}
              variant="outline"
              size="lg"
            >
              Request Concierge Assistance
            </Button>
          </div>
        </div>

        {/* Premium Fleet Gallery */}
        <div className="mt-14 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Premium Fleet</h3>
          <p className="text-sm text-muted-foreground mb-6 text-center">Executive sedans, luxury SUVs and minibuses — all vetted and chauffeur‑driven.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-soft">
              <img src={vehicle1} alt="Executive Sedan" className="w-full h-40 object-cover" />
              <div className="p-3 text-center text-sm font-medium">Executive Sedan</div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-soft">
              <img src={vehicle2} alt="Luxury SUV" className="w-full h-40 object-cover" />
              <div className="p-3 text-center text-sm font-medium">Luxury SUV</div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-soft">
              <img src={vehicle3} alt="Minibus" className="w-full h-40 object-cover" />
              <div className="p-3 text-center text-sm font-medium">Minibus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConciergeSection;
