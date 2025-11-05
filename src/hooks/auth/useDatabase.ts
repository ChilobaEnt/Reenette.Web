import { useState } from 'react';
import { useAuth } from './useAuth';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  created_at: string;
}

export interface Booking {
  id: number;
  user_id: number;
  tour_id: number;
  booking_date: string;
  status: BookingStatus;
  customer_name: string;
  customer_email: string;
  tour_name: string;
}

export interface DashboardStats {
  totalBookings: number;
  confirmedBookings: number;
  pendingBookings: number;
  totalRevenue: number;
  recentBookings: Booking[];
  popularTours: { tour: Tour; bookingCount: number }[];
}

export function useDatabase() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTours = async (): Promise<Tour[]> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/getTours');
      if (!response.ok) throw new Error('Failed to fetch tours');
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tours');
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createBooking = async (tourId: number): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to book a tour');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/createBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id,
          tour_id: tourId,
        }),
      });

      if (!response.ok) throw new Error('Failed to create booking');
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create booking');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const getBookings = async (): Promise<Booking[]> => {
    if (!user) {
      setError('You must be logged in to view bookings');
      return [];
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/.netlify/functions/getBookings?user_id=${user.id}`);
      if (!response.ok) throw new Error('Failed to fetch bookings');
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch bookings');
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createTour = async (tourData: Omit<Tour, 'id' | 'created_at'>): Promise<Tour | null> => {
    if (!user?.isAdmin) {
      setError('Admin access required');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/createTour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tourData),
      });

      if (!response.ok) throw new Error('Failed to create tour');
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create tour');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateTour = async (tourId: number, tourData: Partial<Tour>): Promise<boolean> => {
    if (!user?.isAdmin) {
      setError('Admin access required');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/.netlify/functions/updateTour/${tourId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tourData),
      });

      if (!response.ok) throw new Error('Failed to update tour');
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update tour');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteTour = async (tourId: number): Promise<boolean> => {
    if (!user?.isAdmin) {
      setError('Admin access required');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/.netlify/functions/deleteTour/${tourId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete tour');
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete tour');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: number, status: BookingStatus): Promise<boolean> => {
    if (!user?.isAdmin) {
      setError('Admin access required');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/.netlify/functions/updateBookingStatus/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) throw new Error('Failed to update booking status');
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update booking status');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const getDashboardStats = async (): Promise<DashboardStats | null> => {
    if (!user?.isAdmin) {
      setError('Admin access required');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/getDashboardStats');
      if (!response.ok) throw new Error('Failed to fetch dashboard stats');
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch dashboard stats');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    getTours,
    createTour,
    updateTour,
    deleteTour,
    createBooking,
    getBookings,
    updateBookingStatus,
    getDashboardStats,
    loading,
    error
  };
}