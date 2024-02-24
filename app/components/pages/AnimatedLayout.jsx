
import React from 'react';

const AnimatedLayout = ({ children, isLoginForm, switchForm }) => {
  const handleSwitchForm = () => {
    switchForm(!isLoginForm);
  };

  return (
    <div className="animated-layout">
      {/* Add animated photo */}
      <div className="animated-photo"></div>
      {children}
      <button onClick={handleSwitchForm}>
        Switch to {isLoginForm ? 'Signup' : 'Login'}
      </button>
    </div>
  );
};

export default AnimatedLayout;
