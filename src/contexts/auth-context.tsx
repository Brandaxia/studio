
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the user object
interface User {
  id: string;
  name: string;
  email: string;
}

// Define the shape of the context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  register: (name: string, email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

// Create the context with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that will wrap the application
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, pass: string): Promise<boolean> => {
    setLoading(true);
    console.log("Login attempt with:", email);
    
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate a successful login for a specific user
    if ((email === 'admin@ainsophic.com' && pass === 'password') || (email === 'maiputesting@gmail.com' && pass === 'Test5202!')) {
      const mockUser: User = { id: '1', name: 'Admin User', email: email };
      setUser(mockUser);
      setLoading(false);
      return true;
    }
    
    // Simulate a failed login
    setUser(null);
    setLoading(false);
    return false;
  };

  const register = async (name: string, email: string, pass: string): Promise<boolean> => {
    setLoading(true);
    console.log("Registering new user:", { name, email });
    
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For this mock, we'll assume registration is always successful
    // In a real app, you would handle potential errors (e.g., email already exists)
    
    setLoading(false);
    return true;
  };


  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
