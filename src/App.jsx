import React, { useState } from 'react';
import MainPage from "./MainPage";
import LoginPage from "./components/Auth/Login";
import SignupPage from "./components/Auth/Signup";
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Function to set isAuthenticated to true when login is successful
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate('/'); // Redirect to the main page after successful login.
  };

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <MainPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />}
      />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;
