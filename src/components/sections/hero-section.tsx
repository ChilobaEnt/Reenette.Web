import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import heroMountain from '@/assets/hero-mountain.jpg';
import beachParadise from '@/assets/beach-paradise.jpg';
import templeHeritage from '@/assets/temple-heritage.jpg';
import safariAdventure from '@/assets/safari-adventure.jpg';

const heroSlides = [
  {
    id: 1,
    image: heroMountain,
    title: 'Experience the Extraordinary',
    subtitle: 'Discover breathtaking landscapes and unforgettable adventures',
    location: 'Patagonia, Chile',
    cta: 'Explore Mountains'
  },
  {
    id: 2,
    image: beachParadise,
    title: 'Paradise Awaits',
    subtitle: 'Crystal clear waters and pristine beaches call your name',
    location: 'Maldives',
    cta: 'Discover Islands'
  },
  {
    id: 3,
    image: templeHeritage,
    title: 'Journey Through Time',
    subtitle: 'Ancient cultures and timeless beauty await exploration',
    location: 'Angkor Wat, Cambodia',
    cta: 'Explore Heritage'
  },
  {
    id: 4,
    image: safariAdventure,
    title: 'Wild Adventures',
    subtitle: 'Experience the raw beauty of untamed wilderness',
    location: 'Serengeti, Tanzania',
    cta: 'Safari Experience'
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Hero Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-overlay z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center mb-4 animate-fade-in-up">
                <MapPin className="h-5 w-5 mr-2 text-accent" />
                <span className="text-accent font-medium">{slide.location}</span>
              </div>
              
              <h1 className="text-hero mb-6 animate-fade-in-up">
                {slide.title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  {slide.cta}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-white/20 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="lg"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-white/20 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent shadow-glow'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30 text-white/70 animate-float">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}