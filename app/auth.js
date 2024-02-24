"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { appwrite } from 'appwrite';

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track component mounting

    const checkAuth = async () => {
      try {
        const { data } = await appwrite.account.get();

        // Update state only if the component is still mounted
        if (isMounted) {
          setUser(data);
        }
      } catch (error) {
        // Handle errors
        setUser(null);
      }
    };

    checkAuth();

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures this effect runs only once during mount

  const login = async (email, password) => {
    try {
      await appwrite.account.createSession(email, password);
      router.push('/login');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const signup = async (email, password) => {
    try {
      await appwrite.account.create(email, password);
      router.push('/signup');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const logout = async () => {
    try {
      await appwrite.account.deleteSession('current');
      router.push('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return { user, login, signup, logout };
};
