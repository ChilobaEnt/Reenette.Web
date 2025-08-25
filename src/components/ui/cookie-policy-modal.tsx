import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookiePolicyModal({ isOpen, onClose }: CookiePolicyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Cookie Policy</DialogTitle>
          <DialogDescription>
            Last Updated: August 22, 2025
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Reenette Tours and Travel Ltd. uses cookies and similar technologies to enhance your 
                  browsing experience, analyze website traffic, and provide personalized content. This 
                  Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help 
                  websites remember your preferences, login status, and other information to improve your 
                  experience on subsequent visits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Session Cookies</h4>
                    <p>Temporary cookies that expire when you close your browser</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Persistent Cookies</h4>
                    <p>Remain on your device for a set period or until you delete them</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Third-Party Cookies</h4>
                    <p>Set by external services we use (Google Analytics, booking platforms)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close your browser</li>
                </ul>
                <p className="mt-4">
                  Note that disabling certain cookies may affect website functionality and your user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you have questions about our Cookie Policy, please contact us:
                </p>
                <div className="mt-2">
                  <p>📧 info@reenettetours.com</p>
                  <p>📞 +254 712 345 678</p>
                  <p>📍 Nairobi, Kenya</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
        
        <div className="flex justify-end pt-4">
          <Button onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}