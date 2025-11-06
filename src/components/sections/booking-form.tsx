import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import type { Tour } from '@/types';

interface BookingFormProps {
  tour: Tour;
  onSuccess?: () => void;
}

export function BookingForm({ tour, onSuccess }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showCalendar, setShowCalendar] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-4">Thank you for your booking request!</h3>
        <p className="text-muted-foreground">
          We'll contact you within 24 hours to confirm your tour details.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      data-netlify="true"
      name="tour-booking"
      className="space-y-6"
      netlify-honeypot="bot-field"
    >
      {/* Tour Info - Hidden Fields */}
      <input type="hidden" name="form-name" value="tour-booking" />
      <input type="hidden" name="tour-name" value={tour.title} />
      <input type="hidden" name="tour-id" value={tour.id.toString()} />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your full name"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email address"
        />
      </div>

      {/* Date Selection */}
      <div className="space-y-2">
        <label htmlFor="date" className="text-sm font-medium">
          Preferred Date
        </label>
        <div className="relative">
          <Button
            type="button"
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !selectedDate && 'text-muted-foreground'
            )}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
          </Button>
          {showCalendar && (
            <div className="absolute z-50 mt-2 rounded-md border bg-background shadow-md">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setShowCalendar(false);
                }}
                disabled={(date) =>
                  date < new Date() || date > new Date(2025, 11, 31)
                }
                initialFocus
              />
            </div>
          )}
          <input
            type="hidden"
            name="preferred-date"
            value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}
          />
        </div>
      </div>

      {/* Number of Participants */}
      <div className="space-y-2">
        <label htmlFor="participants" className="text-sm font-medium">
          Number of Participants
        </label>
        <Input
          id="participants"
          name="participants"
          type="number"
          required
          min="1"
          max="20"
          defaultValue="2"
        />
        <p className="text-xs text-muted-foreground">Maximum 20 participants per group</p>
      </div>

      {/* Special Requests */}
      <div className="space-y-2">
        <label htmlFor="special-requests" className="text-sm font-medium">
          Special Requests
        </label>
        <Textarea
          id="special-requests"
          name="special-requests"
          placeholder="Any dietary requirements, accessibility needs, or special interests..."
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full">
        Request Booking
      </Button>
    </form>
  );
}