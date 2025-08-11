import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie, Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functionality: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functionality: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleReject = () => {
    const rejected = {
      essential: true,
      analytics: false,
      marketing: false,
      functionality: false,
    };
    setPreferences(rejected);
    localStorage.setItem('cookie-consent', JSON.stringify(rejected));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <Card className="max-w-6xl mx-auto">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">We Value Your Privacy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                    <Link to="/cookie-policy" className="text-primary hover:underline font-medium">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button 
                  variant="outline" 
                  onClick={handleReject}
                  className="flex-1 sm:flex-initial"
                >
                  Reject All
                </Button>
                
                <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex-1 sm:flex-initial"
                      onClick={() => setShowPreferences(true)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Manage Preferences
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Cookie Preferences
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-4">
                      <p className="text-muted-foreground text-sm">
                        Choose which cookies you'd like to accept. Essential cookies are required for the website to function properly.
                      </p>
                      
                      {/* Essential Cookies */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <Label className="text-base font-medium">Essential Cookies</Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Required for core website functionality including security and navigation.
                            </p>
                          </div>
                          <Switch checked={true} disabled />
                        </div>
                      </div>
                      
                      {/* Analytics Cookies */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <Label className="text-base font-medium">Analytics Cookies</Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Help us understand how visitors interact with our website to improve user experience.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.analytics}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, analytics: checked }))
                            }
                          />
                        </div>
                      </div>
                      
                      {/* Functionality Cookies */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <Label className="text-base font-medium">Functionality Cookies</Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Remember your preferences like language selection and saved itineraries.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.functionality}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, functionality: checked }))
                            }
                          />
                        </div>
                      </div>
                      
                      {/* Marketing Cookies */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <Label className="text-base font-medium">Marketing Cookies</Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Show you relevant travel offers and promotions based on your interests.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.marketing}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, marketing: checked }))
                            }
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <Button 
                          variant="outline" 
                          onClick={() => setShowPreferences(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button 
                          onClick={handleSavePreferences}
                          className="flex-1"
                        >
                          Save Preferences
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-initial"
                >
                  Accept All
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleReject}
                className="absolute top-2 right-2 lg:relative lg:top-0 lg:right-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CookieConsent;