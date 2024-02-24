"use client"
import { useEffect, useState } from "react";
import { account, ID } from '../appwrite';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  console.log({ user });

  useEffect(() => {
    async function getUser() {
      setUser(await account.get());
    }
    getUser();
  }, []);

  async function handleLogout() {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleLogin() {
    try {
      await account.createEmailSession(email, password);
      setUser(await account.get());
      setEmail('');
      setPassword('');
    } catch (e) {
      console.error(e);
    }
  }

  async function handleRegister() {
    try {
      await account.create(ID.unique(), email, password);
      await handleLogin();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex h-screen">
      {/* Animated Image */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage: "url('path/to/your/animated-image.gif')", // Replace with your image path
        }}
      ></div>

      {/* Login Form Container */}
      <div className="flex-1 p-8 bg-white bg-opacity-75">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
