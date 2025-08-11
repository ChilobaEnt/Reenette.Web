import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Target, Star, ExternalLink } from 'lucide-react';

const golfCourses = [
  {
    name: 'Karen Country Club',
    coordinates: [-36.7006, -1.3207],
    rating: 4.9,
    par: 72,
    holes: 18,
    description: 'One of Kenya\'s most prestigious golf clubs with stunning views.',
    established: '1936'
  },
  {
    name: 'Muthaiga Golf Club',
    coordinates: [-36.8219, -1.2632],
    rating: 4.8,
    par: 71,
    holes: 18,
    description: 'Historic colonial golf club with championship course.',
    established: '1913'
  },
  {
    name: 'Sigona Golf Club',
    coordinates: [-36.7889, -1.2167],
    rating: 4.7,
    par: 72,
    holes: 18,
    description: 'Modern championship course with excellent facilities.',
    established: '1971'
  },
  {
    name: 'Limuru Country Club',
    coordinates: [-36.6397, -1.0537],
    rating: 4.6,
    par: 70,
    holes: 18,
    description: 'Highland golf course with mountain views.',
    established: '1950'
  },
  {
    name: 'Nyali Golf Club',
    coordinates: [39.7208, -4.0435],
    rating: 4.5,
    par: 72,
    holes: 18,
    description: 'Coastal golf club with ocean views and beach access.',
    established: '1950'
  },
  {
    name: 'Vipingo Ridge',
    coordinates: [39.7364, -3.9833],
    rating: 4.8,
    par: 72,
    holes: 18,
    description: 'Modern coastal course overlooking the Indian Ocean.',
    established: '2009'
  }
];

interface GolfMapProps {
  className?: string;
}

export function GolfMap({ className = '' }: GolfMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<typeof golfCourses[0] | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-36.8219, -1.2632], // Center on Nairobi area
      zoom: 8,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add golf course markers
    golfCourses.forEach((course) => {
      const el = document.createElement('div');
      el.className = 'golf-marker';
      el.style.cssText = `
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #22c55e, #16a34a);
        border: 3px solid white;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      `;
      
      const icon = document.createElement('div');
      icon.innerHTML = '⛳';
      icon.style.fontSize = '16px';
      el.appendChild(icon);

      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.2)';
        el.style.zIndex = '1000';
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.zIndex = '1';
      });

      el.addEventListener('click', () => {
        setSelectedCourse(course);
        map.current?.flyTo({
          center: course.coordinates as [number, number],
          zoom: 14,
          pitch: 60,
          duration: 2000
        });
      });

      new mapboxgl.Marker(el)
        .setLngLat(course.coordinates as [number, number])
        .addTo(map.current!);
    });

    // Fit map to show all markers
    const bounds = new mapboxgl.LngLatBounds();
    golfCourses.forEach(course => {
      bounds.extend(course.coordinates as [number, number]);
    });
    map.current.fitBounds(bounds, { padding: 50 });
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
      setShowTokenInput(false);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (showTokenInput) {
    return (
      <Card className={`${className} p-8 text-center`}>
        <CardContent>
          <div className="mb-6">
            <Target className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Golf Courses Map</h3>
            <p className="text-muted-foreground mb-4">
              To view the interactive map of golf courses, please enter your Mapbox public token.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Get your free token at{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                mapbox.com <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter Mapbox public token (pk.)"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={() => mapboxToken && initializeMap()}
              disabled={!mapboxToken || !mapboxToken.startsWith('pk.')}
            >
              Load Map
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
        {/* Map Container */}
        <div className="lg:col-span-2 relative">
          <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              Golf Courses in Kenya
            </div>
          </div>
        </div>

        {/* Course Details Panel */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Featured Golf Courses</h3>
            <p className="text-sm text-muted-foreground">
              Click on a marker to explore course details
            </p>
          </div>

          {selectedCourse ? (
            <Card className="overflow-hidden border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-primary">{selectedCourse.name}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="text-sm font-medium">{selectedCourse.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {selectedCourse.description}
                </p>
                
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary">Par {selectedCourse.par}</div>
                    <div className="text-muted-foreground">Course Par</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{selectedCourse.holes}</div>
                    <div className="text-muted-foreground">Holes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{selectedCourse.established}</div>
                    <div className="text-muted-foreground">Established</div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  size="sm"
                  onClick={() => window.location.href = '#contact'}
                >
                  Book Tee Time
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="p-6 text-center border-dashed">
              <Target className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Select a golf course marker on the map to view details
              </p>
            </Card>
          )}

          {/* Quick Course List */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Quick Access</h4>
            {golfCourses.slice(0, 3).map((course) => (
              <button
                key={course.name}
                onClick={() => {
                  setSelectedCourse(course);
                  map.current?.flyTo({
                    center: course.coordinates as [number, number],
                    zoom: 14,
                    pitch: 60,
                    duration: 2000
                  });
                }}
                className="w-full text-left p-2 rounded border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{course.name}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-accent fill-current" />
                    <span className="text-xs">{course.rating}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}