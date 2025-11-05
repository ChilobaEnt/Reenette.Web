import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { MoreHorizontal, Search, Calendar as CalendarIcon } from 'lucide-react';
import { useDatabase } from '@/hooks/auth/useDatabase';
import { LoadingSpinner, ErrorMessage } from '@/components/ui/loading-error';
import type { Booking, Tour, BookingStatus } from '@/types';

interface BookingWithDetails extends Booking {
  tour: Tour;
  user: {
    name: string;
    email: string;
  };
}

const statusColors: Record<BookingStatus, string> = {
  pending: 'bg-yellow-500/20 text-yellow-700',
  confirmed: 'bg-green-500/20 text-green-700',
  cancelled: 'bg-red-500/20 text-red-700',
};

export function BookingsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { loading, error, getBookings, updateBookingStatus } = useDatabase();

  const [bookings, setBookings] = useState<BookingWithDetails[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleStatusChange = async (bookingId: number, status: BookingStatus) => {
    const success = await updateBookingStatus(bookingId, status);
    if (success) {
      setBookings(bookings.map(booking => 
        booking.id === bookingId ? { ...booking, status } : booking
      ));
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.tour.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate = !selectedDate || 
      format(new Date(booking.booking_date), 'yyyy-MM-dd') === 
      format(selectedDate, 'yyyy-MM-dd');

    return matchesSearch && matchesDate;
  });

  if (loading) return <LoadingSpinner size="lg" text="Loading bookings..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <h1 className="text-3xl font-bold">Bookings Management</h1>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
            {showCalendar && (
              <div className="absolute right-0 top-full mt-2 z-50">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setShowCalendar(false);
                  }}
                  className="rounded-md border bg-card shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Tour</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>#{booking.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{booking.user.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {booking.user.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{booking.tour.title}</TableCell>
                <TableCell>
                  {format(new Date(booking.booking_date), 'PP')}
                </TableCell>
                <TableCell>
                  <Badge
                    className={cn(
                      "capitalize",
                      statusColors[booking.status]
                    )}
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  ${booking.tour.price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {(['pending', 'confirmed', 'cancelled'] as BookingStatus[]).map((status) => (
                        <DropdownMenuItem
                          key={status}
                          onClick={() => handleStatusChange(booking.id, status)}
                          disabled={booking.status === status}
                        >
                          Mark as {status}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}