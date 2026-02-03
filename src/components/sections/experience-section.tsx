import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Compass, Users, Award, Shield } from 'lucide-react';

const experiences = [
  {
    icon: Compass,
    title: 'Expert Guidance',
    description: 'Our experienced safari guides and golf professionals ensure authentic East African experiences.',
    badge: '25+ Years'
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Tailored safari and golf tours designed to match your interests and preferences.',
    badge: 'Custom Tours'
  },
  {
    icon: Award,
    title: 'Local Expertise',
    description: 'Deep knowledge of Kenya\'s wildlife, culture, and premier golf destinations.',
    badge: 'Kenya Specialists'
  },
  {
    icon: Shield,
    title: 'Fully Licensed',
    description: 'Licensed tour operator with support throughout Kenya.',
    badge: '100% Licensed'
  }
];

const stats = [
  { number: '15+', label: 'Safari Destinations' },
  { number: '12+', label: 'Golf Courses' },
  { number: '400+', label: 'Happy Travelers' },
  { number: '99%', label: 'Satisfaction Rate' }
];

export function ExperienceSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Reenette Tours and Travel Ltd
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            As a premier East African specialty safari provider, we create personalized, 
            unforgettable travel experiences across Kenya's most spectacular destinations.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card
                key={experience.title}
                className="group border-0 shadow-soft hover:shadow-adventure transition-all duration-500 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-3 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 bg-accent text-accent-foreground"
                    >
                      {experience.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-adventure">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl md:text-3xl font-light text-foreground/80 italic max-w-4xl mx-auto">
            "Adventure is not outside man; it is within. The real voyage of discovery 
            consists not in seeking new landscapes, but in having new eyes."
          </blockquote>
          <cite className="block mt-4 text-muted-foreground font-medium">
            — Marcel Proust
          </cite>
        </div>
      </div>
    </section>
  );
}