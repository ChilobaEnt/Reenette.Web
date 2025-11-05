import { useState } from 'react';
import { ApiResponse } from '@/types';
import { useAuth } from './useAuth';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

export function useApi<T>({ onSuccess, onError }: UseApiOptions<T> = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const callApi = async <R = T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<R>> => {
    setLoading(true);
    setError(null);

    try {
      // Add auth header if user is logged in
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...options.headers,
      };

      if (user?.token?.access_token) {
        headers.Authorization = `Bearer ${user.token.access_token}`;
      }

      const response = await fetch(`/.netlify/functions/${endpoint}`, {
        ...options,
        headers,
      });

      const data: ApiResponse<R> = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred');
      }

      onSuccess?.(data.data as T);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setError(message);
      onError?.(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    callApi,
    setError,
  };
}