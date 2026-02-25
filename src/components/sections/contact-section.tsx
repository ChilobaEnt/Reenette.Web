import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, Star } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@reenette.com',
    description: 'Get answers to your questions'
  },
  {
    icon: Phone,
    title: 'WhatsApp Us',
  value: '+254 777753195',
    description: 'Speak to our safari experts'
  },
  {
    icon: MapPin,
    title: 'Visit Kenya',
    value: 'Nairobi, Kenya',
    description: 'Explore East Africa with us'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    value: 'Mon - Fri: 8:00 - 5:00',
    description: 'We\'re here to help'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/20 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your{' '}
            <span className="text-white">
              Adventure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to embark on the journey of a lifetime? Our travel experts are here 
            to help you create the perfect adventure tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-adventure border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="h-6 w-6 mr-2 text-primary" />
                  Get In Touch
                  <Badge className="ml-3 bg-accent text-accent-foreground">
                    Free Consultation
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form action="https://formsubmit.co/info@reenette.com" method="POST" target="_blank" className="space-y-6"
                  onSubmit={async (e) => {
                    try {
                      const form = new FormData(e.currentTarget);
                      // build payload matching our server function
                      const payload = {
                        name: form.get('name'),
                        Client: form.get('Client'),
                        destination: form.get('destination'),
                        message: form.get('message')
                      };
                      // fire-and-forget POST to our Netlify function
                      fetch('/.netlify/functions/postContact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                      }).catch((err) => console.error('contact save failed', err));
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                        type="email"
                        name="Client"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Dream Destination
                  </label>
                  <Input
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="Where would you like to go?"
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell Us About Your Dream Trip *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your ideal adventure, travel dates, group size, interests, and any special requirements..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:shadow-glow resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-adventure hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>

              {/* Trust Indicators removed as requested */}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="border-0 shadow-soft hover:shadow-adventure transition-all duration-500 transform hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-black" />
                      </div>
                      <h3 className="font-bold mb-2">{info.title}</h3>
                      <p className="font-medium text-primary mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <Card className="border-0 shadow-adventure bg-gradient-hero text-black">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
                <p className="mb-6 opacity-90">
                  Join thousands of satisfied travelers who have experienced the world with us. 
                  Your next adventure is just a conversation away.
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div>•</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}