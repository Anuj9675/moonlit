import React, { useState } from 'react';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import AnimatedLayout from './pages/AnimatedLayout';

const login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = (isLogin) => {
    setIsLoginForm(isLogin);
  };

  return (
    <AnimatedLayout isLoginForm={isLoginForm} switchForm={switchForm}>
      {isLoginForm ? (
        <LoginForm switchToSignup={() => switchForm(false)} />
      ) : (
        <SignupForm switchToLogin={() => switchForm(true)} />
      )}
    </AnimatedLayout>
  );
};

export default login;
