export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  created_at: string;
  location: string;
  rating: number;
  duration: string;
  highlights: string[];
}

export interface Booking {
  id: number;
  user_id: number;
  tour_id: number;
  booking_date: string;
  status: BookingStatus;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface BookingFormData {
  tour_id: number;
  date: string;
  participants: number;
  special_requests?: string;
}