import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, X } from 'lucide-react';

export function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already accepted privacy notice
    const hasAccepted = localStorage.getItem('privacyAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto">
      <div className="bg-background border border-border rounded-lg shadow-lg p-5">
        <div className="flex items-start gap-3">
          <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">Your Privacy Matters</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use your details only to manage your bookings, improve your experience, and (if you agree) send you special offers. 
              We never sell your data. Read our full{' '}
              <button 
                onClick={() => {
                  // Trigger the privacy policy modal by clicking the footer link
                  const privacyLink = document.querySelector('[data-privacy-policy]') as HTMLElement;
                  if (privacyLink) {
                    privacyLink.click();
                  }
                }}
                className="text-primary hover:text-primary/80 underline font-medium"
              >
                Privacy Policy
              </button>.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-6 w-6 p-0 hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2 mt-4">
          <Button 
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            size="sm"
          >
            ✓ I Agree
          </Button>
        </div>
      </div>
    </div>
  );
}