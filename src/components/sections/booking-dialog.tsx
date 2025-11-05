import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from '@/components/ui/loading-error';
import { useAuth } from '@/hooks/auth/useAuth';
import { useDatabase } from '@/hooks/auth/useDatabase';
import type { Tour } from '@/types';

interface BookingDialogProps {
  tour: Tour;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const bookingFormSchema = z.object({
  date: z.date({
    required_error: "Please select a date for your tour",
  }),
  participants: z.number({
    required_error: "Please enter number of participants",
  }).min(1).max(20),
  special_requests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function BookingDialog({ tour, open, onOpenChange }: BookingDialogProps) {
  const { isAuthenticated, login } = useAuth();
  const { createBooking, loading } = useDatabase();
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      participants: 1,
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    if (!isAuthenticated) {
      login();
      return;
    }

    const success = await createBooking({
      tour_id: tour.id,
      date: format(data.date, 'yyyy-MM-dd'),
      participants: data.participants,
      special_requests: data.special_requests,
    });

    if (success) {
      setBookingSuccess(true);
      setTimeout(() => {
        onOpenChange(false);
        setBookingSuccess(false);
        form.reset();
      }, 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{tour.name}</DialogTitle>
          <DialogDescription>
            {bookingSuccess ? (
              <div className="text-center py-4 text-primary">
                Booking request sent successfully! We'll contact you shortly.
              </div>
            ) : (
              "Check availability and book your safari adventure. We'll contact you to confirm the details."
            )}
          </DialogDescription>
        </DialogHeader>

        {!bookingSuccess && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            const calendar = document.querySelector('.rdp');
                            if (calendar) {
                              calendar.classList.toggle('hidden');
                            }
                          }}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, 'PPP') : 'Pick a date'}
                        </Button>
                      </div>
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date > new Date(2025, 11, 31)
                        }
                        className="hidden absolute z-50 bg-background border rounded-md shadow-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="participants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Participants</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        max={20}
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Maximum 20 participants per group
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="special_requests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any dietary requirements, accessibility needs, or special interests..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <LoadingSpinner size="sm" text="Processing..." />
                ) : (
                  'Check Availability'
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}