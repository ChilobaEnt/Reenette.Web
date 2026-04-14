import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Instagram, Youtube, MapPin } from 'lucide-react';

interface ContactSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  instagramHref?: string;
  youtubeHref?: string;
}

export function ContactSupportModal({ isOpen, onClose, instagramHref = '#', youtubeHref = '#' }: ContactSupportModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Contact Support</DialogTitle>
          <DialogDescription>
            Ways to reach Reenette Tours & Travel Ltd
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[50vh] pr-4">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center"><Phone className="mr-3 text-accent" />+254 777753195 (WhatsApp)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center"><Mail className="mr-3 text-accent" /><a href="mailto:info@reenette.com" className="underline hover:text-accent">info@reenette.com</a></p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Social</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Instagram className="mr-3 text-accent" />
                    <a href={instagramHref} target="_blank" rel="noreferrer" className="underline hover:text-accent">Instagram</a>
                  </li>
                  <li className="flex items-center">
                    <Youtube className="mr-3 text-accent" />
                    <a href={youtubeHref} target="_blank" rel="noreferrer" className="underline hover:text-accent">YouTube</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center"><MapPin className="mr-3 text-accent" />Nairobi, Kenya</p>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        <div className="flex justify-end pt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ContactSupportModal;
