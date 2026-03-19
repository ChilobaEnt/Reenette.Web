import { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CookiePolicyModal } from '@/components/ui/cookie-policy-modal';
import { PrivacyPolicyModal } from '@/components/ui/privacy-policy-modal';

const footerLinks = {
  destinations: [
    'Maasai Mara',
    'Amboseli National Park',
    'Mount Kenya',
    'Tsavo East & West',
    'Lake Nakuru',
    'Samburu National Reserve'
  ],
  services: [
    'Safari Tours',
    'Golf Tours',
    'Hotel Bookings',
    'Airport Transfers',
    'Guided Tours',
    'Cultural Experiences'
  ],
  support: [
    'Booking Terms',
    'Privacy Policy',
    'Cookie Policy',
    'Contact Support'
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export function Footer() {
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    if (link === 'Cookie Policy') {
      setIsCookiePolicyOpen(true);
    }

    if (link === 'Privacy Policy') {
      setIsPrivacyPolicyOpen(true);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Subscribe for Exclusive Travel Deals
            </h3>
            <p className="mb-6 opacity-90">
              Join our newsletter and receive special offers, expert travel tips, and first access to new tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email for exclusive offers"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
              >
                Get Exclusive Deals
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/reenette-banner.svg" alt="Reenette logo" className="h-6 w-auto object-contain mr-2" />
              <span className="text-2xl font-bold">Reenette Tours and Travel Ltd</span>
            </div>
            <p className="mb-6 opacity-90 leading-relaxed">
              Reenette Tours and Travel Ltd. is a premier East African specialty safari provider 
              offering personalized, unforgettable travel experiences across Kenya since 1999.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span>+254 777753195 (WhatsApp)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span>info@reenette.com</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Safari Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link}>
                  <span className="opacity-80 transition-all duration-300">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <span className="opacity-80 transition-all duration-300">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-sm opacity-80 text-center md:text-right">
              <p>&copy; 2026 Reenette Tours and Travel Ltd. All rights reserved.</p>
              <p className="mt-1">Licensed Kenya Tour Operator</p>
            </div>
          </div>
        </div>
      </div>
      
      <CookiePolicyModal 
        isOpen={isCookiePolicyOpen} 
        onClose={() => setIsCookiePolicyOpen(false)} 
      />
      {/* Privacy Policy Modal */}
      {/* Imported lazily below to avoid extra bundle cost if desired */}
      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </footer>
  );
}