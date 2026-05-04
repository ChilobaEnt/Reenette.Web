import { Briefcase, Star, Truck, Plane } from 'lucide-react';

export function ConciergeSection() {
  return (
    <section id="concierge" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Concierge Services</h2>
          <p className="text-lg text-muted-foreground">
            Highly personalized 24/7 assistance for travel, lifestyle, and business needs in Nairobi. Our concierge
            service saves time and enhances comfort — tailored for discerning travellers who expect seamless,
            white-glove support across every detail of their stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card/60 rounded-lg shadow-soft">
            <div className="flex items-center mb-4">
              <Airplane className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Airport VIP Meet & Greet</h3>
            </div>
            <p className="text-muted-foreground">Premium arrival and departure service with expedited immigration support, priority luggage handling, private transfers, and personalized welcome at the terminal.</p>
          </div>

          <div className="p-6 bg-card/60 rounded-lg shadow-soft">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Executive Car Rentals & Transfers</h3>
            </div>
            <p className="text-muted-foreground">A curated fleet of executive vehicles with professional chauffeurs — hourly, day-use or long-term — tailored to corporate travel, events, and sightseeing.</p>
          </div>

          <div className="p-6 bg-card/60 rounded-lg shadow-soft">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Lifestyle & Bespoke Requests</h3>
            </div>
            <p className="text-muted-foreground">From private dining, reservations at Nairobi’s best restaurants, event access and tailored shopping assistance — we handle special requests with discretion and speed.</p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">Our concierge team operates 24/7 and works closely with premium partners to ensure every detail is covered — from corporate travel logistics to creating unforgettable leisure experiences.</p>
          <a href="#contact" className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded shadow hover:shadow-glow transition">Request Concierge Assistance</a>
        </div>
      </div>
    </section>
  );
}

export default ConciergeSection;
