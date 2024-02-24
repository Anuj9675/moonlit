"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { appwrite } from 'appwrite';

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await appwrite.account.get();
        setUser(data);
      } catch (error) {
        setUser(null);
      }
    };

    checkAuth();
  }, []);

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
