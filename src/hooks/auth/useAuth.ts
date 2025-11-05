import { useState, useEffect } from 'react';
import netlifyIdentity, { User as NetlifyUser } from 'netlify-identity-widget';

export interface User {
  id: string;
  email: string;
  token: {
    access_token: string;
  };
  isAdmin?: boolean;
}

const mapNetlifyUser = (netlifyUser: NetlifyUser): User => ({
  id: netlifyUser.id,
  email: netlifyUser.email,
  token: {
    access_token: netlifyUser.token.access_token
  },
  isAdmin: netlifyUser.app_metadata?.roles?.includes('admin') || false
});

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Set up event listeners
    netlifyIdentity.on('login', (user) => setUser(mapNetlifyUser(user)));
    netlifyIdentity.on('logout', () => setUser(null));

    // Check if user is already logged in
    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) {
      setUser(mapNetlifyUser(currentUser));
    }

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = () => {
    netlifyIdentity.open('login');
  };

  const signup = () => {
    netlifyIdentity.open('signup');
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  return {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  };
}